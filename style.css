/* ============================================================
   POSITIVE INNER SELF, LLC — Global Stylesheet v2.0
   Design: Cinematic dark-forest-green, editorial, premium
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ── CSS Variables ─────────────────────────────────────────── */
:root {
  --green-deep:    #0d2818;
  --green-dark:    #16401f;
  --green-mid:     #2a6b3c;
  --green-sage:    #4e9b5e;
  --green-light:   #7ec491;
  --green-pale:    #d4edda;
  --green-tint:    #f0f7f2;
  --cream:         #faf8f4;
  --white:         #ffffff;
  --charcoal:      #1a1a1a;
  --text-dark:     #1e2d22;
  --text-muted:    #5a6b5f;
  --text-light:    #8fa896;
  --border:        rgba(78,155,94,0.18);
  --border-light:  rgba(78,155,94,0.08);

  --font-display:  'Cormorant Garamond', Georgia, serif;
  --font-body:     'DM Sans', system-ui, sans-serif;

  --radius:        12px;
  --radius-lg:     20px;
  --radius-pill:   999px;
  --shadow-sm:     0 2px 12px rgba(13,40,24,0.08);
  --shadow-md:     0 8px 32px rgba(13,40,24,0.12);
  --shadow-lg:     0 20px 60px rgba(13,40,24,0.18);

  --nav-h:         72px;
  --transition:    0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Reset ─────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  color: var(--text-dark);
  background: var(--cream);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }

/* ── Announcement Bar ──────────────────────────────────────── */
.announce-bar {
  background: var(--green-deep);
  color: rgba(255,255,255,0.85);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-align: center;
  padding: 9px 1rem;
}
.announce-bar a {
  color: var(--green-light);
  margin-left: 6px;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── Navigation ────────────────────────────────────────────── */
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13,40,24,0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(78,155,94,0.15);
  height: var(--nav-h);
  display: flex;
  align-items: center;
}
.nav-inner {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-logo img {
  height: 42px;
  width: auto;
  filter: brightness(0) invert(1);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}
.nav-links > li { position: relative; }
.nav-links > li > a,
.nav-links > li > button {
  color: rgba(255,255,255,0.82);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  padding: 8px 14px;
  border-radius: var(--radius);
  transition: color var(--transition), background var(--transition);
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}
.nav-links > li > a:hover,
.nav-links > li > button:hover,
.nav-links > li:hover > a {
  color: #fff;
  background: rgba(78,155,94,0.18);
}
.nav-links > li > a.active { color: var(--green-light); }

/* Dropdown */
.has-dropdown { position: relative; }
.has-dropdown .chevron {
  font-size: 0.65rem;
  transition: transform var(--transition);
  opacity: 0.6;
}
.has-dropdown:hover .chevron { transform: rotate(180deg); }
.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--green-deep);
  border: 1px solid rgba(78,155,94,0.2);
  border-radius: var(--radius);
  min-width: 220px;
  padding: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition), transform var(--transition);
  transform: translateX(-50%) translateY(8px);
  box-shadow: var(--shadow-lg);
  z-index: 200;
}
.has-dropdown:hover .dropdown {
  opacity: 1;
  pointer-events: all;
  transform: translateX(-50%) translateY(0);
}
.dropdown a {
  display: block;
  color: rgba(255,255,255,0.78);
  font-size: 0.82rem;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background var(--transition), color var(--transition);
}
.dropdown a:hover { background: rgba(78,155,94,0.2); color: #fff; }
.dropdown .sep {
  height: 1px;
  background: rgba(78,155,94,0.15);
  margin: 6px 0;
}
.dropdown .group-label {
  display: block;
  color: var(--green-sage);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 10px 12px 4px;
}

/* Nav CTA */
.nav-cta {
  background: var(--green-sage) !important;
  color: #fff !important;
  padding: 8px 18px !important;
  border-radius: var(--radius-pill) !important;
  font-weight: 600 !important;
}
.nav-cta:hover { background: var(--green-mid) !important; }

/* Mobile hamburger */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;
  padding: 8px;
}
.nav-hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: rgba(255,255,255,0.8);
  border-radius: 2px;
  transition: var(--transition);
}
.nav-mobile {
  display: none;
  position: fixed;
  inset: 0;
  background: var(--green-deep);
  z-index: 500;
  overflow-y: auto;
  padding: 2rem;
  flex-direction: column;
  gap: 0.5rem;
}
.nav-mobile.open { display: flex; }
.nav-mobile-close {
  align-self: flex-end;
  color: rgba(255,255,255,0.7);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.nav-mobile a {
  color: rgba(255,255,255,0.85);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 12px 0;
  border-bottom: 1px solid rgba(78,155,94,0.12);
  display: block;
}
.nav-mobile .mobile-sub {
  padding-left: 1rem;
  font-size: 0.95rem;
  color: rgba(255,255,255,0.6);
}
.nav-mobile .mobile-group-label {
  color: var(--green-sage);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 10px 0 2px;
  font-weight: 600;
}

/* ── Buttons ───────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: var(--radius-pill);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: all var(--transition);
  white-space: nowrap;
}
.btn-primary {
  background: var(--green-sage);
  color: #fff;
  box-shadow: 0 4px 20px rgba(78,155,94,0.35);
}
.btn-primary:hover {
  background: var(--green-mid);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(78,155,94,0.45);
}
.btn-outline {
  border: 2px solid rgba(255,255,255,0.45);
  color: #fff;
}
.btn-outline:hover {
  border-color: var(--green-light);
  background: rgba(126,196,145,0.12);
  color: var(--green-light);
}
.btn-outline-dark {
  border: 2px solid var(--green-mid);
  color: var(--green-mid);
}
.btn-outline-dark:hover {
  background: var(--green-mid);
  color: #fff;
}
.btn-sm { padding: 9px 20px; font-size: 0.82rem; }
.btn-lg { padding: 18px 40px; font-size: 1rem; }

/* ── Section Layout ────────────────────────────────────────── */
.section { padding: 100px 2rem; }
.section-sm { padding: 64px 2rem; }
.section-lg { padding: 140px 2rem; }
.container { max-width: 1200px; margin: 0 auto; }
.container-narrow { max-width: 860px; margin: 0 auto; }
.container-wide { max-width: 1400px; margin: 0 auto; }

/* ── Section Labels ────────────────────────────────────────── */
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green-sage);
  margin-bottom: 1rem;
}
.section-label::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: var(--green-sage);
  border-radius: 2px;
}

/* ── Headings ──────────────────────────────────────────────── */
h1, h2, h3, h4 { font-family: var(--font-display); line-height: 1.15; }
h1 { font-size: clamp(2.8rem, 6vw, 5.5rem); font-weight: 300; }
h2 { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 300; }
h3 { font-size: clamp(1.3rem, 2.5vw, 1.9rem); font-weight: 400; }
h4 { font-size: 1.1rem; font-weight: 600; font-family: var(--font-body); }

em { font-style: italic; color: var(--green-sage); }

/* ── Hero — Full viewport cinematic ───────────────────────── */
.hero {
  position: relative;
  height: 100vh;
  min-height: 640px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--green-deep);
}
.hero-video-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-video-wrap video,
.hero-video-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(13,40,24,0.82) 0%, rgba(22,64,31,0.55) 60%, rgba(13,40,24,0.4) 100%);
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--green-light);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.2s forwards;
}
.hero-eyebrow::before {
  content: '';
  display: block;
  width: 32px;
  height: 1px;
  background: var(--green-light);
}
.hero h1 {
  color: #fff;
  max-width: 760px;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.4s forwards;
}
.hero h1 em { color: var(--green-light); }
.hero-sub {
  color: rgba(255,255,255,0.72);
  font-size: 1.1rem;
  max-width: 560px;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeUp 0.8s 0.6s forwards;
}
.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 0.8s 0.8s forwards;
}
.hero-stats {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: rgba(13,40,24,0.7);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(78,155,94,0.2);
}
.hero-stats-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;
}
.hero-stat-num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--green-light);
}
.hero-stat-label {
  font-size: 0.72rem;
  font-weight: 500;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 2px;
}

/* ── Badges ────────────────────────────────────────────────── */
.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  background: rgba(78,155,94,0.06);
  color: var(--green-mid);
}
.badge.dark {
  background: rgba(78,155,94,0.12);
  border-color: rgba(78,155,94,0.25);
  color: rgba(255,255,255,0.75);
}

/* ── Dividers ──────────────────────────────────────────────── */
.divider {
  height: 1px;
  background: var(--border-light);
  margin: 0;
}

/* ── Cards ─────────────────────────────────────────────────── */
.card {
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  overflow: hidden;
  transition: box-shadow var(--transition), transform var(--transition);
}
.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}
.card-body { padding: 1.75rem; }

/* ── Provider Cards ────────────────────────────────────────── */
.provider-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.provider-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  overflow: hidden;
  transition: box-shadow var(--transition), transform var(--transition);
  display: flex;
  flex-direction: column;
}
.provider-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }
.provider-card-img {
  height: 240px;
  background: linear-gradient(135deg, var(--green-dark), var(--green-mid));
  overflow: hidden;
  position: relative;
}
.provider-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}
.provider-card-img .provider-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: rgba(255,255,255,0.25);
}
.provider-card-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.provider-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 0.75rem;
}
.provider-tag {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 3px 9px;
  border-radius: var(--radius-pill);
  background: var(--green-tint);
  color: var(--green-mid);
  border: 1px solid var(--border);
}
.provider-card-name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 400;
  color: var(--text-dark);
  margin-bottom: 0.2rem;
}
.provider-card-title {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 0.75rem;
}
.provider-card-license {
  font-size: 0.72rem;
  color: var(--text-light);
  margin-bottom: 0.85rem;
}
.provider-card-bio {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.55;
  flex: 1;
  margin-bottom: 1rem;
}
.provider-card-specialties {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 1.25rem;
}
.spec-tag {
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  background: var(--green-pale);
  color: var(--green-dark);
}
.provider-card-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: auto;
}
.provider-card-actions a {
  flex: 1;
  min-width: 80px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 9px 12px;
  border-radius: var(--radius-pill);
  transition: all var(--transition);
}
.provider-card-actions .btn-book {
  background: var(--green-sage);
  color: #fff;
}
.provider-card-actions .btn-book:hover { background: var(--green-mid); }
.provider-card-actions .btn-profile {
  border: 1.5px solid var(--border);
  color: var(--text-muted);
}
.provider-card-actions .btn-profile:hover { border-color: var(--green-sage); color: var(--green-dark); background: var(--green-tint); }

/* ── Service Cards Grid ────────────────────────────────────── */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.service-card {
  padding: 2rem;
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  transition: box-shadow var(--transition), transform var(--transition);
}
.service-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }
.service-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: var(--green-tint);
  border-radius: var(--radius);
  margin-bottom: 1.25rem;
  border: 1px solid var(--border);
}
.service-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: var(--font-body);
  margin-bottom: 0.6rem;
  color: var(--text-dark);
}
.service-card p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}
.service-card a {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--green-mid);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.service-card a:hover { color: var(--green-sage); }

/* ── Steps ─────────────────────────────────────────────────── */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
}
.steps-grid::before {
  content: '';
  position: absolute;
  top: 28px;
  left: 12.5%;
  right: 12.5%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
}
.step { text-align: center; }
.step-num {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green-mid), var(--green-sage));
  color: #fff;
  font-family: var(--font-display);
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 16px rgba(78,155,94,0.3);
}
.step h4 { margin-bottom: 0.5rem; color: var(--text-dark); }
.step p { font-size: 0.875rem; color: var(--text-muted); }

/* ── Testimonials ──────────────────────────────────────────── */
.testimonials-track { display: flex; gap: 1.5rem; }
.testimonial-card {
  flex: 0 0 360px;
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 2rem;
  border: 1px solid var(--border-light);
}
.testimonial-stars { color: var(--green-sage); font-size: 0.9rem; margin-bottom: 1rem; }
.testimonial-text {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-style: italic;
  color: var(--text-dark);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}
.testimonial-author {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
}

/* ── FAQ ───────────────────────────────────────────────────── */
.faq-list { display: flex; flex-direction: column; gap: 1rem; }
.faq-item {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--white);
}
.faq-question {
  width: 100%;
  text-align: left;
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-dark);
  cursor: pointer;
  transition: background var(--transition);
}
.faq-question:hover { background: var(--green-tint); }
.faq-question[aria-expanded="true"] { background: var(--green-tint); color: var(--green-dark); }
.faq-chevron {
  font-size: 0.75rem;
  color: var(--green-sage);
  transition: transform var(--transition);
  flex-shrink: 0;
}
.faq-question[aria-expanded="true"] .faq-chevron { transform: rotate(180deg); }
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}
.faq-answer-inner {
  padding: 0 1.5rem 1.25rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
}
.faq-answer-inner a { color: var(--green-mid); font-weight: 500; text-decoration: underline; }

/* ── Dark Band Sections ────────────────────────────────────── */
.section-dark {
  background: var(--green-deep);
  color: #fff;
}
.section-dark .section-label { color: var(--green-light); }
.section-dark .section-label::before { background: var(--green-light); }
.section-dark h2 { color: #fff; }
.section-dark p { color: rgba(255,255,255,0.68); }

.section-mid {
  background: var(--green-dark);
  color: #fff;
}
.section-tint { background: var(--green-tint); }

/* ── Mission Split ─────────────────────────────────────────── */
.mission-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}
.mission-img {
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/5;
}
.mission-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mission-content { }
.mission-content h2 { margin-bottom: 1.25rem; }
.mission-content p { font-size: 1rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.75; }
.mission-pillars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}
.pillar {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.pillar-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }
.pillar-text h5 { font-size: 0.9rem; font-weight: 600; margin-bottom: 2px; }
.pillar-text p { font-size: 0.8rem; color: var(--text-muted); }

/* ── CTA Band ──────────────────────────────────────────────── */
.cta-band {
  background: linear-gradient(135deg, var(--green-dark) 0%, var(--green-deep) 100%);
  padding: 100px 2rem;
  text-align: center;
}
.cta-band h2 { color: #fff; margin-bottom: 1rem; }
.cta-band p { color: rgba(255,255,255,0.65); max-width: 520px; margin: 0 auto 2.5rem; font-size: 1.05rem; }
.cta-band .cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

/* ── Newsletter ────────────────────────────────────────────── */
.newsletter-row {
  display: flex;
  gap: 12px;
  max-width: 420px;
}
.newsletter-row input {
  flex: 1;
  padding: 12px 16px;
  border-radius: var(--radius-pill);
  border: 1.5px solid rgba(78,155,94,0.3);
  background: rgba(255,255,255,0.06);
  color: #fff;
  font-size: 0.875rem;
  outline: none;
  transition: border-color var(--transition);
}
.newsletter-row input::placeholder { color: rgba(255,255,255,0.35); }
.newsletter-row input:focus { border-color: var(--green-sage); }

/* ── Footer ────────────────────────────────────────────────── */
.site-footer {
  background: var(--green-deep);
  color: rgba(255,255,255,0.65);
  padding: 80px 2rem 2rem;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 4rem;
}
.footer-brand img { height: 52px; margin-bottom: 1rem; }
.footer-brand p { font-size: 0.875rem; line-height: 1.7; max-width: 280px; }
.footer-brand .footer-socials {
  display: flex;
  gap: 10px;
  margin-top: 1.5rem;
}
.footer-social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(78,155,94,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
  font-weight: 700;
  transition: background var(--transition), color var(--transition);
}
.footer-social-link:hover { background: var(--green-sage); color: #fff; }
.footer-col h5 {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  margin-bottom: 1.25rem;
}
.footer-col ul { display: flex; flex-direction: column; gap: 0.65rem; }
.footer-col ul li a {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  transition: color var(--transition);
}
.footer-col ul li a:hover { color: var(--green-light); }
.footer-contact-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}
.footer-contact-item .icon { font-size: 0.9rem; flex-shrink: 0; margin-top: 2px; }
.footer-contact-item a { color: rgba(255,255,255,0.5); transition: color var(--transition); }
.footer-contact-item a:hover { color: var(--green-light); }
.footer-bottom {
  border-top: 1px solid rgba(78,155,94,0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.3);
}
.footer-bottom a { color: rgba(255,255,255,0.4); transition: color var(--transition); }
.footer-bottom a:hover { color: var(--green-light); }

/* ── Provider Detail Page ──────────────────────────────────── */
.provider-detail-hero {
  background: linear-gradient(135deg, var(--green-deep) 0%, var(--green-dark) 100%);
  padding: 80px 2rem 60px;
}
.provider-detail-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 4rem;
  align-items: start;
}
.provider-photo-wrap {
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 3/4;
  background: rgba(78,155,94,0.15);
  position: relative;
}
.provider-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}
.provider-photo-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: rgba(255,255,255,0.2);
}
.provider-detail-meta { color: rgba(255,255,255,0.7); }
.provider-detail-meta .breadcrumb {
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 8px;
  align-items: center;
}
.provider-detail-meta .breadcrumb a { color: var(--green-light); }
.provider-detail-meta .breadcrumb span { color: rgba(255,255,255,0.3); }
.provider-detail-meta .provider-type-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
}
.provider-type-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: rgba(78,155,94,0.25);
  color: var(--green-light);
  border: 1px solid rgba(78,155,94,0.35);
}
.provider-detail-meta h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: #fff;
  margin-bottom: 0.4rem;
}
.provider-detail-meta .cred-line {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 1.5rem;
}
.provider-detail-meta .license-id {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.35);
  font-family: monospace;
  margin-bottom: 2rem;
}
.provider-detail-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 2rem;
}
.provider-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: var(--radius-pill);
  transition: all var(--transition);
}
.provider-link-book {
  background: var(--green-sage);
  color: #fff;
}
.provider-link-book:hover { background: var(--green-mid); }
.provider-link-external {
  border: 1.5px solid rgba(78,155,94,0.4);
  color: rgba(255,255,255,0.75);
}
.provider-link-external:hover { border-color: var(--green-light); color: var(--green-light); background: rgba(78,155,94,0.1); }
.provider-link-back {
  border: 1.5px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.5);
}
.provider-link-back:hover { border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.8); }

.provider-detail-body {
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 2rem;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
}
.provider-bio-section h3 {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--green-pale);
  margin-top: 2rem;
}
.provider-bio-section h3:first-child { margin-top: 0; }
.provider-bio-section p { font-size: 0.95rem; color: var(--text-muted); line-height: 1.75; margin-bottom: 0.75rem; }
.provider-bio-section .tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 0.5rem;
}
.provider-bio-section .tag-list span {
  font-size: 0.78rem;
  padding: 5px 13px;
  border-radius: var(--radius-pill);
  background: var(--green-pale);
  color: var(--green-dark);
  font-weight: 500;
}
.provider-sidebar-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  position: sticky;
  top: calc(var(--nav-h) + 1.5rem);
}
.provider-sidebar-card h5 {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 1rem;
}
.sidebar-action-btn {
  display: block;
  width: 100%;
  text-align: center;
  padding: 12px;
  border-radius: var(--radius-pill);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 10px;
  transition: all var(--transition);
}
.sidebar-action-primary { background: var(--green-sage); color: #fff; }
.sidebar-action-primary:hover { background: var(--green-mid); }
.sidebar-action-outline { border: 1.5px solid var(--border); color: var(--text-muted); }
.sidebar-action-outline:hover { border-color: var(--green-sage); color: var(--green-dark); background: var(--green-tint); }

/* ── Breadcrumb ────────────────────────────────────────────── */
.page-breadcrumb {
  background: var(--green-deep);
  padding: 14px 2rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
}
.page-breadcrumb a { color: var(--green-light); }
.page-breadcrumb span { margin: 0 6px; }

/* ── Page Hero (non-fullscreen) ───────────────────────────── */
.page-hero {
  background: linear-gradient(135deg, var(--green-deep) 0%, var(--green-dark) 100%);
  padding: 80px 2rem 70px;
  text-align: center;
}
.page-hero h1 { color: #fff; margin-bottom: 1rem; font-size: clamp(2rem, 5vw, 3.5rem); }
.page-hero p { color: rgba(255,255,255,0.65); font-size: 1.1rem; max-width: 560px; margin: 0 auto 2rem; }
.page-hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

/* ── Filter Pills ──────────────────────────────────────────── */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2rem;
}
.filter-pill {
  font-size: 0.82rem;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--border);
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--transition);
  background: var(--white);
}
.filter-pill:hover { border-color: var(--green-sage); color: var(--green-dark); }
.filter-pill.active { background: var(--green-sage); border-color: var(--green-sage); color: #fff; }

/* ── Animations ────────────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Responsive ────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .nav-links { display: none; }
  .nav-hamburger { display: flex; }
  .mission-split { grid-template-columns: 1fr; gap: 3rem; }
  .mission-img { aspect-ratio: 16/9; }
  .steps-grid { grid-template-columns: 1fr 1fr; }
  .steps-grid::before { display: none; }
  .footer-top { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
  .provider-detail-inner { grid-template-columns: 240px 1fr; }
  .provider-detail-body { grid-template-columns: 1fr; }
  .provider-sidebar-card { position: static; }
}
@media (max-width: 768px) {
  :root { --nav-h: 60px; }
  .section { padding: 72px 1.25rem; }
  .section-lg { padding: 90px 1.25rem; }
  h1 { font-size: 2.4rem; }
  h2 { font-size: 1.9rem; }
  .hero-stats-inner { grid-template-columns: repeat(2, 1fr); }
  .steps-grid { grid-template-columns: 1fr; }
  .provider-grid { grid-template-columns: 1fr; }
  .service-grid { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr; gap: 2rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .provider-detail-inner { grid-template-columns: 1fr; }
  .provider-photo-wrap { aspect-ratio: 1; max-width: 280px; margin: 0 auto; }
  .hero-actions { flex-direction: column; align-items: flex-start; }
  .cta-band .cta-actions { flex-direction: column; align-items: center; }
  .mission-pillars { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .page-hero { padding: 60px 1.25rem 50px; }
  .provider-detail-hero { padding: 60px 1.25rem 40px; }
}
