// Downloads all assets in asset-urls.json into public/, mirroring the
// wp-content/uploads/... path under public/images (videos -> public/videos).
import { readFileSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const urls = JSON.parse(readFileSync("docs/research/daswell.com/asset-urls.json", "utf8"));

function localPath(u) {
  const url = new URL(u);
  // /wp-content/uploads/2025/10/logo.png -> images/2025/10/logo.png
  let p = url.pathname.replace(/^\/wp-content\/uploads\//, "");
  p = p.replace(/^\//, "");
  const isVideo = /\.(mp4|webm|mov)$/i.test(p);
  const base = isVideo ? "public/videos" : "public/images";
  // flatten: keep only year/month/file to avoid deep nesting issues
  return `${base}/${p}`;
}

async function dl(u) {
  const out = localPath(u);
  if (existsSync(out)) return { u, out, status: "skip" };
  try {
    const res = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return { u, out, status: "err" + res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, buf);
    return { u, out, status: "ok", bytes: buf.length };
  } catch (e) {
    return { u, out, status: "fail:" + e.message };
  }
}

async function main() {
  const results = [];
  const BATCH = 5;
  for (let i = 0; i < urls.length; i += BATCH) {
    const chunk = urls.slice(i, i + BATCH);
    const r = await Promise.all(chunk.map(dl));
    results.push(...r);
    process.stdout.write(`\r${Math.min(i + BATCH, urls.length)}/${urls.length}`);
  }
  console.log("");
  const ok = results.filter((r) => r.status === "ok").length;
  const skip = results.filter((r) => r.status === "skip").length;
  const bad = results.filter((r) => !["ok", "skip"].includes(r.status));
  console.log(`ok=${ok} skip=${skip} bad=${bad.length}`);
  bad.forEach((b) => console.log("  BAD", b.status, b.u));
  // write a manifest mapping url -> local path (web path)
  const map = {};
  results.forEach((r) => {
    map[r.u] = r.out.replace(/^public/, "");
  });
  writeFileSync("docs/research/daswell.com/asset-map.json", JSON.stringify(map, null, 2));
  console.log("wrote asset-map.json");
}
main();
