## 2024-06-16 - Form Feedback UX
**Learning:** Users often feel uncertain when a form submission has no visible state change. Providing an immediate "submitting" state and an accessible success message significantly improves perceived reliability.
**Action:** Always implement a submission status state for forms, including a disabled state for the submit button and a ARIA-live region for status updates.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Global focus states were inconsistent or missing, hindering keyboard navigation. Using :focus-visible with a high-contrast outline and subtle box-shadow ensures accessibility without affecting mouse users' experience.
**Action:** Apply a consistent :focus-visible style in App.css using AICADO's primary blue (#2a77de) and ensure a 'Skip to Content' link is present in the root Layout.

## 2025-05-15 - Visual Cues for Required Fields
**Learning:** Adding a visible red asterisk alongside `aria-required` provides a clearer experience for all users, not just those using screen readers. Placing the asterisk before the colon in labels maintains a professional look while ensuring the indicator is clearly associated with the field name.
**Action:** Use the `.required-asterisk` class with a `<span>*</span>` inside labels, placed before any colons, and pair it with `aria-required="true"` on the input.

## 2026-07-02 - Character Limits and Real-time Feedback
**Learning:** For inputs with character limits, users benefit from real-time feedback that doesn't disrupt their flow. Using `aria-live="polite"` on a counter ensures screen readers announce the state without interrupting, while `aria-describedby` provides immediate context.
**Action:** Implement real-time counters for limited inputs associated via `aria-describedby` and styled with `.form-help-text` for a non-intrusive visual presence.
