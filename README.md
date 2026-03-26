# PISLCC – Positive Inner Self, LLC Website

## Files Overview

```
PISLCC/
├── index.html          ← Home page
├── providers.html      ← Meet Our Providers (22 provider slots)
├── services.html       ← Services page
├── fees.html           ← Fees & Policies + FAQ
├── careers.html        ← Careers page + Application form
├── contact.html        ← Contact page with full intake form
├── css/
│   └── style.css       ← All styles (edit colors/fonts here)
├── js/
│   └── nav.js          ← Shared navigation (injected on every page)
└── images/             ← PUT ALL YOUR PHOTOS HERE
    ├── logo.png                  ← Your nav/brand logo
    ├── hero-main.jpg             ← Homepage hero photo
    ├── office.jpg                ← Office/lobby photo
    ├── careers-team.jpg          ← Careers page team photo
    ├── services-counseling.jpg   ← Services page photo
    ├── services-groups.jpg
    ├── services-supervision.jpg
    ├── services-massage.jpg
    ├── services-acupuncture.jpg
    └── providers/
        ├── provider-1.jpg   ← Provider 1 headshot (square, 1:1 ratio)
        ├── provider-2.jpg
        ├── provider-3.jpg
        ... (up to provider-22.jpg)
```

---

## How to Add Photos

### Logo
1. Save your logo as `images/logo.png`
2. It will automatically appear in the navigation bar on every page
3. If the logo file is missing, a text fallback ("Positive Inner Self / LLC Counseling Center") will show instead

### General Photos
1. Save your photos using the exact filenames listed above
2. Place them in the `images/` folder
3. Reload the page — photos appear automatically
4. If a photo is missing, a tasteful placeholder with the filename is shown

### Provider Photos
1. Save each provider's headshot as a **square image** (e.g. 400×400 px or 600×600 px)
2. Name them `provider-1.jpg`, `provider-2.jpg` ... `provider-22.jpg`
3. Place them in the `images/providers/` folder
4. Update the provider's **Name**, **Title**, and **Specialty** directly in `providers.html`

---

## How to Update Provider Information

Open `providers.html` and find each provider block. Change:

```html
<div class="provider-name">Provider Name</div>        ← Full name
<div class="provider-title">LCSW</div>                ← Credential
<div class="provider-specialty">Specialty / Focus Areas</div>  ← Specialties
```

---

## How to Update Contact Info

Your address, phone, and email appear in multiple places. Search-and-replace:

- Phone: `(503) 461-3910`
- Email: `intake@positiveinnerself.com`
- Address: Update in `contact.html` under "Our Office"

---

## Customizing Colors

Open `css/style.css` and find the `:root` block at the top:

```css
:root {
  --clr-sage:       #7a9e87;   ← Main green
  --clr-gold:       #c4a86b;   ← Accent gold
  --clr-cream:      #faf7f2;   ← Background
  ...
}
```

Change any hex code to update the color across the entire site.

---

## GitHub Pages Deployment

1. Upload all these files to your GitHub repo (`adrian8293/PISLCC`)
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://adrian8293.github.io/PISLCC/`
