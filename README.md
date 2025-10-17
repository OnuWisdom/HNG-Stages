# Stage 0 – Profile Card

A simple, responsive profile card built with vanilla HTML, CSS, and JavaScript. It shows a circular avatar, name, short bio, social links, hobbies, dislikes, and a live-updating timestamp in milliseconds.

## ⚙️ Features

✅ Semantic, accessible HTML structure (`<article>`, `<header>`, `<nav>`, `<section>`, `<figure>`)  
✅ Fully responsive (mobile → tablet → desktop)  
✅ Keyboard navigation support (Tab + Enter works for links)  
✅ Visible focus styles for accessibility  
✅ Dynamic timestamp showing `Date.now()` in milliseconds  
✅ Safe social links (`target="_blank"` + `rel="noopener noreferrer"`)  
✅ Clean, test-ready code — all elements include required `data-testid` attributes
✅ Semantic structure with ARIA labels and `data-testid` hooks for testing

## File Structure

```
Stage 0/
  ├─ index.html        # Markup for the profile card
  ├─ style.css         # Styling and responsive rules
  ├─ script.js         # Live time update logic
  └─ wisdoms.jpg       # Avatar image (ensure file name matches in HTML)
```

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

```powershell
git clone https://github.com/OnuWisdom/HNG-Stage-0.git
```

### 2️⃣ Navigate to the Project Directory

```powershell
cd "Stage 0"
```

### 3️⃣ Open `index.html` in Your Browser

You can run this project without any dependencies.

- Option A: Open directly

  1. Navigate to `Stage 0`.
  2. Double-click `index.html` (or right-click → Open with → your browser).

- Option B: Serve with a lightweight local server (recommended for consistent behavior)

  - VS Code Live Server:
    - Open the folder in VS Code.
    - Install the “Live Server” extension.
    - Right-click `index.html` → “Open with Live Server”.

## How It Works

- The timestamp inside the element with `id="user-time"` updates every second using `Date.now()`.
- Social links open in a new tab with `rel="noopener noreferrer"` for security.
- Focus outlines are styled to improve keyboard accessibility.

## Customization

- Avatar: Replace `wisdoms.jpg` (or update the `src` in `index.html`).
- Name & Bio: Edit the text in `index.html` inside the `.profile-info` section.
- Social Links: Update the `href` values in the Social Links list.
- Hobbies & Dislikes: Modify the list items under their respective sections.
- Styles: Adjust colors, spacing, or layout in `style.css`.

## Testing Hooks

- Elements include `data-testid` attributes (e.g., `test-profile-card`, `test-user-name`, `test-user-time`, etc.) to support UI/integration tests.

## Troubleshooting

- Image not showing:
  - On Windows, file names are case-insensitive, but on some hosts they are case-sensitive. Ensure the image filename in `index.html` exactly matches the actual file name (`wisdoms.jpg` vs `Wisdoms.jpg`).
- Cache issues:
  - Hard refresh the page (Ctrl+F5) if changes don’t appear.

## License

MIT
