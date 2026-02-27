# AGENTS.md

## Scope
These instructions apply to the entire repository.

## Project overview
- This is a static single-page site (no build step).
- Main files:
  - `index.html` for content/structure
  - `style.css` for styling
  - `script.js` for interactions

## Working guidelines
- Prefer small, focused edits over broad rewrites.
- Keep dependencies at zero unless explicitly requested.
- Preserve accessibility attributes (`aria-*`, semantic headings, button labels).
- Test changes locally with a static server when possible:
  - `python3 -m http.server 8000`

## JavaScript conventions
- Write defensive DOM code: guard against missing elements before binding listeners.
- Keep behavior progressively enhanced (page should still render without JS).
- Prefer descriptive constant names and small functions.

## CSS conventions
- Reuse existing custom properties in `:root`.
- Keep section comment structure intact (`/* ===== Section ===== */`).
- Avoid introducing one-off utility classes unless reused.

## Pull request expectations
- Summarize user-visible changes and any internal cleanup separately.
- Include commands used for validation.
