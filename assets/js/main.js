// 1. Highlight the nav link for the section in view.
(function () {
    var links = document.querySelectorAll('.nav__links a');
    var sections = [];
    links.forEach(function (link) {
        var section = document.querySelector(link.getAttribute('href'));
        if (section) sections.push({ link: link, section: section });
    });
    if (!('IntersectionObserver' in window) || !sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            sections.forEach(function (s) {
                if (s.section === entry.target) s.link.setAttribute('aria-current', 'true');
                else s.link.removeAttribute('aria-current');
            });
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { observer.observe(s.section); });
})();

// 2. Countdown chip on the news card ("in 13 days", "tomorrow", "today"). Empty, and hidden, after the date.
(function () {
    var chip = document.querySelector('[data-countdown]');
    if (!chip) return;
    var p = chip.getAttribute('data-countdown').split('-');
    var target = new Date(+p[0], +p[1] - 1, +p[2]);
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var days = Math.round((target - today) / 86400000);
    if (days > 1) chip.textContent = 'in ' + days + ' days';
    else if (days === 1) chip.textContent = 'tomorrow';
    else if (days === 0) chip.textContent = 'today';
})();
