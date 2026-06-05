import type { SpecTable as SpecTableType } from "@/types/product";

export function SpecTable({ table }: { table: SpecTableType }) {
  return (
    <div className="overflow-x-auto">
      {table.caption && (
        <p className="mb-2 text-sm font-medium text-black/70">{table.caption}</p>
      )}
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="bg-brand text-white">
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="border border-white/20 px-3 py-2.5 text-left font-bold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? "bg-white" : "bg-offwhite"}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="border border-border px-3 py-2 text-black/80"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
