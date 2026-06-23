## 2024-06-16 - Form Feedback UX
**Learning:** Users often feel uncertain when a form submission has no visible state change. Providing an immediate "submitting" state and an accessible success message significantly improves perceived reliability.
**Action:** Always implement a submission status state for forms, including a disabled state for the submit button and a ARIA-live region for status updates.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Global focus states were inconsistent or missing, hindering keyboard navigation. Using :focus-visible with a high-contrast outline and subtle box-shadow ensures accessibility without affecting mouse users' experience.
**Action:** Apply a consistent :focus-visible style in App.css using AICADO's primary blue (#2a77de) and ensure a 'Skip to Content' link is present in the root Layout.

## 2025-05-22 - Gating Sensitive Settings
**Learning:** Hardcoding `DEBUG = True` or `SECRET_KEY` in production-ready configurations is a security risk. Using environment variables allows for better environment-specific control and security.
**Action:** Always gate sensitive configuration settings (like DEBUG, SECRET_KEY, API_KEYS) using environment variables and provide safe defaults.
