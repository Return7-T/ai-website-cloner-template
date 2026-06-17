"use client";

import { useState } from "react";

const fields = [
  { name: "name", placeholder: "Name", type: "text", half: true },
  { name: "email", placeholder: "Email (Required)", type: "email", half: true, required: true },
  { name: "phone", placeholder: "Phone or WhatsApp", type: "tel", half: true },
  { name: "country", placeholder: "Country", type: "text", half: true },
  { name: "company", placeholder: "Company Name", type: "text", half: false },
  { name: "product", placeholder: "Product", type: "text", half: false },
];

export function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="request-quote" className="bg-offwhite py-16">
      <div className="ds-container">
        <h2 className="ds-h2">Request A Quote</h2>
        {/* red-blue divider */}
        <div className="mx-auto mb-10 flex w-36 justify-center">
          <span className="h-[3px] w-1/2 bg-brand-dark" />
          <span className="h-[3px] w-1/2 bg-secondary" />
        </div>

        {submitted ? (
          <p className="text-center text-lg text-brand">
            Thank you — your message has been received.
          </p>
        ) : (
          <form
            className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {fields.map((f) => (
              <input
                key={f.name}
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                required={f.required}
                className={
                  "h-[52px] rounded-[3px] border border-border bg-offwhite px-4 text-base text-black outline-none transition focus:border-brand " +
                  (f.half ? "" : "sm:col-span-2")
                }
              />
            ))}
            <textarea
              name="message"
              placeholder="Message (Required)"
              required
              rows={5}
              className="rounded-[3px] border border-border bg-offwhite px-4 py-3 text-base text-black outline-none transition focus:border-brand sm:col-span-2"
            />
            <button
              type="submit"
              className="h-[52px] rounded-[3px] bg-brand text-base font-medium text-white transition hover:bg-brand-dark sm:col-span-2"
            >
              Send A Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
