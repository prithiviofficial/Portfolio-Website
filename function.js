document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
      const toggle = document.getElementById('menu-toggle');
      const menu = document.getElementById('mobile-menu');
      if (toggle && menu) toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      });
      if (toggle && menu) menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
      }));
      document.querySelectorAll('.project-gif-link').forEach((previewLink) => {
        const preview = previewLink.querySelector('.project-preview-video');
        if (!preview) return;
        previewLink.addEventListener('mouseenter', () => {
          preview.play().catch(() => {});
        });
        previewLink.addEventListener('mouseleave', () => {
          preview.pause();
          preview.currentTime = 0;
        });
      });
      const email = document.getElementById('contact-email');
      const status = document.getElementById('contact-status');
      const contactButton = document.getElementById('contact-button');
      if (!email || !status || !contactButton) return;
      contactButton.addEventListener('click', () => {
        const value = email.value.trim();
        if (!value || !email.checkValidity()) {
          status.textContent = 'Enter a valid email address above to open a mail draft.';
          email.focus();
          return;
        }
        status.textContent = 'Opening your email app…';
        const subject = encodeURIComponent('Video editing project inquiry');
        const body = encodeURIComponent('Hello, I would like to discuss a video editing project.\n\nMy email: ' + value);
        window.location.href = 'mailto:prithividebnath67@gmail.com?subject=' + subject + '&body=' + body;
      });
      email.addEventListener('input', () => { status.textContent = ''; });
    });
