# Stage 1 – Multi-Page Website

A responsive multi-page website built with vanilla HTML, CSS, and JavaScript. Features a profile card homepage, about page, and contact form with client-side validation. The site includes semantic HTML structure, accessibility features, and responsive design across all pages.

## ⚙️ Features

### Homepage (Profile Card)

✅ Semantic, accessible HTML structure (`<article>`, `<header>`, `<nav>`, `<section>`, `<figure>`)  
✅ Circular avatar with responsive image  
✅ Dynamic timestamp showing `Date.now()` in milliseconds  
✅ Social media links with safe external linking  
✅ Hobbies and dislikes sections  
✅ Live-updating timestamp in milliseconds

### About Page

✅ Personal bio and background information  
✅ Goals and aspirations section  
✅ Areas of improvement and confidence levels  
✅ Future self notes and reflections  
✅ Structured content with semantic sections

### Contact Page

✅ Fully functional contact form with client-side validation  
✅ Real-time form validation with error messages  
✅ Email format validation and required field checking  
✅ Success message display on form submission  
✅ Accessible form labels and ARIA attributes

### General Features

✅ Fully responsive design (mobile → tablet → desktop)  
✅ Consistent navigation across all pages  
✅ Keyboard navigation support (Tab + Enter works for links)  
✅ Visible focus styles for accessibility  
✅ Clean, test-ready code with `data-testid` attributes  
✅ Semantic structure with ARIA labels for testing

## File Structure

```
Stage 1/
  ├─ index.html        # Homepage with profile card
  ├─ about.html        # About page with personal information
  ├─ contact.html      # Contact page with form
  ├─ style.css         # Shared styling and responsive rules
  ├─ script.js         # Homepage time update logic
  ├─ contact.js        # Contact form validation logic
  └─ public/
      └─ wisdoms.jpg   # Avatar image
```

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

```powershell
git clone https://github.com/OnuWisdom/HNG-Stage-1.git
```

### 2️⃣ Navigate to the Project Directory

```powershell
cd "Stage 1"
```

### 3️⃣ Open the Website in Your Browser

You can run this project without any dependencies.

- Option A: Open directly

  1. Navigate to `Stage 1`.
  2. Double-click `index.html` (or right-click → Open with → your browser).
  3. Use the navigation menu to explore all pages.

- Option B: Serve with a lightweight local server (recommended for consistent behavior)

  - VS Code Live Server:
    - Open the folder in VS Code.
    - Install the "Live Server" extension.
    - Right-click `index.html` → "Open with Live Server".

## How It Works

### Homepage

- The timestamp inside the element with `id="user-time"` updates every second using `Date.now()`.
- Social links open in a new tab with `rel="noopener noreferrer"` for security.
- Profile card displays personal information with responsive design.

### About Page

- Displays personal bio, goals, and areas of improvement.
- Structured content with semantic HTML sections.
- Consistent navigation and styling with the rest of the site.

### Contact Page

- Form validation runs on submit with real-time error display.
- Email validation uses regex pattern matching.
- Success message appears after successful form submission.
- All form fields are properly labeled for accessibility.

### Navigation

- Consistent navigation bar across all pages.
- Focus outlines are styled to improve keyboard accessibility.
- Responsive design adapts to different screen sizes.

## Customization

### Homepage

- Avatar: Replace `wisdoms.jpg` (or update the `src` in `index.html`).
- Name & Bio: Edit the text in `index.html` inside the `.profile-info` section.
- Social Links: Update the `href` values in the Social Links list.
- Hobbies & Dislikes: Modify the list items under their respective sections.

### About Page

- Personal Information: Update bio, goals, and confidence areas in `about.html`.
- Content Sections: Add or modify sections as needed.
- Maintain semantic structure for accessibility.

### Contact Page

- Form Fields: Add or remove form fields in `contact.html`.
- Validation Rules: Modify validation logic in `contact.js`.
- Success Message: Customize the success message text.

### Styling

- Global Styles: Adjust colors, spacing, or layout in `style.css`.
- Responsive Design: Modify media queries for different screen sizes.
- Form Styling: Customize form appearance and validation messages.

## Testing Hooks

### Homepage

- Profile card: `test-profile-card`, `test-user-name`, `test-user-time`
- Social links: `test-user-social-links`, `test-user-social-twitter`, etc.
- Hobbies/Dislikes: `test-user-hobbies`, `test-user-dislikes`

### About Page

- Main content: `test-about-page`, `test-about-bio`, `test-about-goals`
- Additional sections: `test-about-confidence`, `test-about-future-note`, `test-about-extra`

### Contact Page

- Form elements: `test-contact-name`, `test-contact-email`, `test-contact-subject`, `test-contact-message`
- Validation: `test-contact-error-name`, `test-contact-error-email`, etc.
- Success message: `test-contact-success`, `test-contact-submit`

### Navigation

- Navigation links: `test-nav-home`, `test-nav-contact`, `test-nav-about`

## Troubleshooting

### Common Issues

- **Image not showing:**

  - On Windows, file names are case-insensitive, but on some hosts they are case-sensitive. Ensure the image filename in `index.html` exactly matches the actual file name (`wisdoms.jpg` vs `Wisdoms.jpg`).

- **Form validation not working:**

  - Ensure `contact.js` is properly linked in `contact.html`.
  - Check browser console for JavaScript errors.

- **Navigation not working:**

  - Verify all HTML files are in the same directory.
  - Check that file names match the links in the navigation.

- **Cache issues:**
  - Hard refresh the page (Ctrl+F5) if changes don't appear.
  - Clear browser cache if styling changes aren't visible.

### Browser Compatibility

- Tested on modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript features require ES6+ support
- Form validation works with HTML5 input types

## License

MIT
