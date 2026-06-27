## 2024-06-16 - Form Feedback UX
**Learning:** Users often feel uncertain when a form submission has no visible state change. Providing an immediate "submitting" state and an accessible success message significantly improves perceived reliability.
**Action:** Always implement a submission status state for forms, including a disabled state for the submit button and a ARIA-live region for status updates.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Global focus states were inconsistent or missing, hindering keyboard navigation. Using :focus-visible with a high-contrast outline and subtle box-shadow ensures accessibility without affecting mouse users' experience.
**Action:** Apply a consistent :focus-visible style in App.css using AICADO's primary blue (#2a77de) and ensure a 'Skip to Content' link is present in the root Layout.

## 2024-03-27 - Form Accessibility & Feedback Patterns
**Learning:** Combining visible required indicators (*), ARIA attributes (aria-required), and helpful placeholders significantly reduces cognitive load. Providing a specific "Sending..." state with a spinner reinforces that an action is in progress.
**Action:** Use the .required-asterisk, .spinner, and .success-message (alert box) classes in App.css for consistent form UX.
