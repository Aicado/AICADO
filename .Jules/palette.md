## 2024-06-16 - Form Feedback UX
**Learning:** Users often feel uncertain when a form submission has no visible state change. Providing an immediate "submitting" state and an accessible success message significantly improves perceived reliability.
**Action:** Always implement a submission status state for forms, including a disabled state for the submit button and a ARIA-live region for status updates.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Global focus states were inconsistent or missing, hindering keyboard navigation. Using :focus-visible with a high-contrast outline and subtle box-shadow ensures accessibility without affecting mouse users' experience.
**Action:** Apply a consistent :focus-visible style in App.css using AICADO's primary blue (#2a77de) and ensure a 'Skip to Content' link is present in the root Layout.

## 2025-05-15 - Visual Cues for Required Fields
**Learning:** Adding a visible red asterisk alongside `aria-required` provides a clearer experience for all users, not just those using screen readers. Placing the asterisk before the colon in labels maintains a professional look while ensuring the indicator is clearly associated with the field name.
**Action:** Use the `.required-asterisk` class with a `<span>*</span>` inside labels, placed before any colons, and pair it with `aria-required="true"` on the input.

## 2024-06-21 - Character Counter and Success Message UX
**Learning:** Providing real-time character count feedback for textareas helps users stay within limits and reduces frustration upon submission. Standardized alert box styles for success messages improve visual consistency and clearly communicate successful interactions.
**Action:** Implement character counters for length-limited inputs using 'aria-describedby' and ensure success messages follow the established alert box pattern (background, border, padding).
