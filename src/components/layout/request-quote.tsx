"use client";

import { useState, type FormEvent } from "react";

const fields = [
  { name: "name", placeholder: "Name", type: "text", half: true, required: false },
  { name: "email", placeholder: "Email (Required)", type: "email", half: true, required: true },
  { name: "phone", placeholder: "Phone or WhatsApp", type: "tel", half: true, required: false },
  { name: "country", placeholder: "Country", type: "text", half: true, required: false },
  { name: "company", placeholder: "Company Name", type: "text", half: false, required: false },
  { name: "product", placeholder: "Product", type: "text", half: false, required: false },
];

function validateEmail(email: string): string | null {
  if (!email.trim()) return "Email is required.";
  // simple but robust email check
  const atIndex = email.indexOf("@");
  if (atIndex < 1) return "Please enter a valid email address (e.g. name@company.com).";
  const afterAt = email.slice(atIndex + 1);
  if (!afterAt || !afterAt.includes(".")) return "Please enter a complete email address.";
  return null;
}

type FieldErrors = Record<string, string>;

export function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(form: HTMLFormElement): FieldErrors {
    const errs: FieldErrors = {};
    const data = new FormData(form);

    const email = (data.get("email") as string) || "";
    const emailErr = validateEmail(email);
    if (emailErr) errs.email = emailErr;

    const message = (data.get("message") as string) || "";
    if (!message.trim()) errs.message = "Message is required.";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    const form = e.currentTarget;
    const fieldErrors = validate(form);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) return;

    setSubmitting(true);

    try {
      // Simulate async submission
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Simulate 95% success rate
          if (Math.random() < 0.05) {
            reject(new Error("Network error. Please check your connection and try again."));
          } else {
            resolve();
          }
        }, 1200);
      });

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setSubmitError(null);
    setErrors({});
  }

  if (submitted) {
    return (
      <section id="request-quote" className="bg-offwhite py-16">
        <div className="ds-container">
          <h2 className="ds-h2">Request A Quote</h2>
          <div className="mx-auto mb-10 flex w-36 justify-center">
            <span className="h-[3px] w-1/2 bg-brand-dark" />
            <span className="h-[3px] w-1/2 bg-secondary" />
          </div>
          <div className="mx-auto max-w-[600px] text-center">
            <p className="mb-4 text-lg text-brand">
              Thank you — your message has been received.
            </p>
            <p className="mb-6 text-base text-black/60">
              Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="rounded-[3px] bg-brand px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="request-quote" className="bg-offwhite py-16">
      <div className="ds-container">
        <h2 className="ds-h2">Request A Quote</h2>
        <div className="mx-auto mb-10 flex w-36 justify-center">
          <span className="h-[3px] w-1/2 bg-brand-dark" />
          <span className="h-[3px] w-1/2 bg-secondary" />
        </div>

        {submitError && (
          <div
            role="alert"
            className="mx-auto mb-6 max-w-[1200px] rounded-sm border border-destructive/30 bg-destructive/10 px-5 py-3 text-sm text-destructive"
          >
            {submitError}
          </div>
        )}

        <form
          className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2"
          onSubmit={handleSubmit}
          noValidate
        >
          {fields.map((f) => {
            const hasError = !!errors[f.name];
            return (
              <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
                <input
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  required={f.required}
                  disabled={submitting}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? `${f.name}-error` : undefined}
                  className={
                    "h-[52px] w-full rounded-[3px] border bg-offwhite px-4 text-base text-black outline-none transition focus:border-brand " +
                    (hasError
                      ? "border-destructive"
                      : "border-border")
                  }
                />
                {hasError && (
                  <p
                    id={`${f.name}-error`}
                    role="alert"
                    className="mt-1 text-xs text-destructive"
                  >
                    {errors[f.name]}
                  </p>
                )}
              </div>
            );
          })}

          <div className="sm:col-span-2">
            <textarea
              name="message"
              placeholder="Message (Required)"
              required
              rows={5}
              disabled={submitting}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={
                "w-full rounded-[3px] border bg-offwhite px-4 py-3 text-base text-black outline-none transition focus:border-brand " +
                (errors.message ? "border-destructive" : "border-border")
              }
            />
            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="mt-1 text-xs text-destructive"
              >
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex h-[52px] items-center justify-center gap-2 rounded-[3px] bg-brand text-base font-medium text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
          >
            {submitting ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Sending...
              </>
            ) : (
              "Send A Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
