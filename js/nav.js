/* nav.js – shared navigation injector for PISLCC website
   Include this script on every page. It auto-highlights
   the active link based on the current filename.
*/

(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav>
    <div class="nav-inner">
      <!-- LOGO: replace images/logo.png with your actual logo file -->
      <a href="index.html" class="nav-logo">
        <img
          src="images/logo.png"
          alt="Positive Inner Self, LLC Logo"
          class="nav-logo-img"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="nav-logo-text" style="display:none;">
          <span class="line1">Positive Inner Self</span>
          <span class="line2">LLC Counseling Center</span>
        </div>
      </a>

      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" data-page="index.html">Home</a></li>
        <li>
          <a href="providers.html" data-page="providers.html">Our Providers</a>
          <ul class="dropdown">
            <li><a href="providers.html#provider-1">Provider 1</a></li>
            <li><a href="providers.html#provider-2">Provider 2</a></li>
            <li><a href="providers.html#provider-3">Provider 3</a></li>
            <li><a href="providers.html">View All Providers</a></li>
          </ul>
        </li>
        <li>
          <a href="services.html" data-page="services.html">Services</a>
          <ul class="dropdown">
            <li><a href="services.html#counseling">Counseling</a></li>
            <li><a href="services.html#groups">Groups &amp; Workshops</a></li>
            <li><a href="services.html#supervision">Supervision &amp; Consultation</a></li>
            <li><a href="services.html#massage">Massage Therapy</a></li>
          </ul>
        </li>
        <li>
          <a href="fees.html" data-page="fees.html">Fees &amp; Policies</a>
          <ul class="dropdown">
            <li><a href="fees.html#faq">Common Questions</a></li>
            <li><a href="careers.html">Careers</a></li>
          </ul>
        </li>
        <li><a href="careers.html" data-page="careers.html">Careers</a></li>
        <li><a href="contact.html" data-page="contact.html">Contact</a></li>
        <li><a href="#" class="nav-cta">Client Portal</a></li>
      </ul>

      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  // Inject nav at top of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Highlight active link
  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active');
  });

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
})();
