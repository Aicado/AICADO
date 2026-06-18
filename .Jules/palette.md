## 2024-06-16 - Form Feedback UX
**Learning:** Users often feel uncertain when a form submission has no visible state change. Providing an immediate "submitting" state and an accessible success message significantly improves perceived reliability.
**Action:** Always implement a submission status state for forms, including a disabled state for the submit button and a ARIA-live region for status updates.

## 2025-05-15 - High-Visibility Keyboard Focus
**Learning:** Default browser focus rings often lack sufficient contrast or clash with custom component designs (like buttons with rounded corners). Using `:focus-visible` allows for high-contrast, tailored focus indicators that only appear for keyboard users, maintaining visual polish for mouse users.
**Action:** Implement global `:focus-visible` styles and specific overrides for interactive components (buttons, inputs) using `box-shadow` or `outline-offset` to ensure the focus ring respects `border-radius`.
