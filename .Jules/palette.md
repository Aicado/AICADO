## 2024-06-16 - Form Feedback UX
**Learning:** Users often feel uncertain when a form submission has no visible state change. Providing an immediate "submitting" state and an accessible success message significantly improves perceived reliability.
**Action:** Always implement a submission status state for forms, including a disabled state for the submit button and a ARIA-live region for status updates.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Global focus states were inconsistent or missing, hindering keyboard navigation. Using :focus-visible with a high-contrast outline and subtle box-shadow ensures accessibility without affecting mouse users' experience.
**Action:** Apply a consistent :focus-visible style in App.css using AICADO's primary blue (#2a77de) and ensure a 'Skip to Content' link is present in the root Layout.

## 2025-05-15 - Visual Cues for Required Fields
**Learning:** Adding a visible red asterisk alongside `aria-required` provides a clearer experience for all users, not just those using screen readers. Placing the asterisk before the colon in labels maintains a professional look while ensuring the indicator is clearly associated with the field name.
**Action:** Use the `.required-asterisk` class with a `<span>*</span>` inside labels, placed before any colons, and pair it with `aria-required="true"` on the input.

## 2026-11-08 - Accessible Character Limits and Live Feedback
**Learning:** Unconstrained textareas cause submission uncertainty and silent truncation when length limits are not communicated in real time. Hard character limits (`maxLength`) must be coupled with an `aria-describedby` reference and a polite live region (`aria-live="polite"`) so both visual and assistive technology users receive non-intrusive feedback on remaining capacity.
**Action:** Associate bounded inputs with a character counter using `aria-describedby`, use `aria-live="polite"`, and style the counter with existing utility classes like `.post-meta` for consistent visual hierarchy.
