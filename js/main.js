/* Maximus Buildcon — Site JS */

document.addEventListener('DOMContentLoaded', () => {

    /* ----- Sticky navbar effect ----- */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => {
            if (window.scrollY > 60) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ----- Mobile menu toggle ----- */
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    /* ----- Mobile dropdown toggle ----- */
    document.querySelectorAll('.dropdown-toggle').forEach(t => {
        t.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                t.parentElement.classList.toggle('open');
            }
        });
    });

    /* ----- Reveal-on-scroll ----- */
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => io.observe(el));

    /* ----- Animated stat counters ----- */
    const stats = document.querySelectorAll('.stat-number[data-count]');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count, 10);
                const suffix = el.dataset.suffix || '+';
                const duration = 1800;
                const start = performance.now();
                const animate = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(target * eased);
                    el.innerHTML = current + '<span class="plus">' + suffix + '</span>';
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
                statObserver.unobserve(el);
            }
        });
    }, { threshold: 0.4 });

    stats.forEach(s => statObserver.observe(s));

    /* ----- Subtle parallax on hero ----- */
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            if (y < window.innerHeight) {
                hero.style.backgroundPosition = `center ${y * 0.3}px`;
            }
        }, { passive: true });
    }

    /* ----- Form fake submit ----- */
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const original = btn.textContent;
            btn.textContent = 'Sent — We will be in touch';
            btn.disabled = true;
            form.reset();
            setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 4000);
        });
    }
});
