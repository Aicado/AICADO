## 2024-06-16 - Form Feedback UX
**Learning:** Users often feel uncertain when a form submission has no visible state change. Providing an immediate "submitting" state and an accessible success message significantly improves perceived reliability.
**Action:** Always implement a submission status state for forms, including a disabled state for the submit button and a ARIA-live region for status updates.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Global focus states were inconsistent or missing, hindering keyboard navigation. Using :focus-visible with a high-contrast outline and subtle box-shadow ensures accessibility without affecting mouse users' experience.
**Action:** Apply a consistent :focus-visible style in App.css using AICADO's primary blue (#2a77de) and ensure a 'Skip to Content' link is present in the root Layout.

## 2025-05-15 - Interactive Form Feedback & Accessibility
**Learning:** Combining visual indicators (required stars, placeholders) with dynamic feedback (loading spinners) and accessibility attributes (aria-required, aria-live) creates a robust and inclusive form experience. Consistent styling for success states (alert boxes) further reinforces user confidence.
**Action:** Implement the .spinner and .success-message patterns in App.css for all async forms, and always use aria-required and aria-live for state transitions.
