## 2024-06-16 - Form Feedback UX
**Learning:** Users often feel uncertain when a form submission has no visible state change. Providing an immediate "submitting" state and an accessible success message significantly improves perceived reliability.
**Action:** Always implement a submission status state for forms, including a disabled state for the submit button and a ARIA-live region for status updates.

## 2025-05-15 - High-Visibility Keyboard Focus
**Learning:** Default browser focus rings often lack sufficient contrast or clash with custom component designs (like buttons with rounded corners). Using `:focus-visible` allows for high-contrast, tailored focus indicators that only appear for keyboard users, maintaining visual polish for mouse users.
**Action:** Implement global `:focus-visible` styles and specific overrides for interactive components (buttons, inputs) using `box-shadow` or `outline-offset` to ensure the focus ring respects `border-radius`.
## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Global focus states were inconsistent or missing, hindering keyboard navigation. Using :focus-visible with a high-contrast outline and subtle box-shadow ensures accessibility without affecting mouse users' experience.
**Action:** Apply a consistent :focus-visible style in App.css using AICADO's primary blue (#2a77de) and ensure a 'Skip to Content' link is present in the root Layout.

## 2025-05-15 - Visual Cues for Required Fields
**Learning:** Adding a visible red asterisk alongside `aria-required` provides a clearer experience for all users, not just those using screen readers. Placing the asterisk before the colon in labels maintains a professional look while ensuring the indicator is clearly associated with the field name.
**Action:** Use the `.required-asterisk` class with a `<span>*</span>` inside labels, placed before any colons, and pair it with `aria-required="true"` on the input.

## 2026-11-11 - Text Input Character Limits and Accessible Counters
**Learning:** Hard limits on text inputs via `maxLength` can silently block input and confuse users if not accompanied by a real-time count. Associating the counter via `aria-describedby` and using `aria-live="polite"` ensures screen reader users are proactively aware of constraints.
**Action:** When enforcing character limits on textareas/inputs, pair `maxLength` with an `aria-describedby` counter styled with existing utility classes (like `.post-meta`) and `aria-live="polite"`.
