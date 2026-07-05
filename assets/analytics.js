/* Google Analytics 4 — ملف واحد تشترك فيه كل الصفحات.
   ضع معرّف القياس (Measurement ID) هنا مرّة واحدة فقط:
   analytics.google.com ← Admin ← Data streams ← alhady-nb.org */
(function () {
  var GA_ID = 'G-DB0C8439XN';

  // لا يعمل خارج النطاق الرسمي
  // (المعاينة المحلية ومعاينات Netlify لا تُحتسب في الإحصاءات)
  if (!/(^|\.)alhady-nb\.org$/.test(location.hostname)) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  // حدث مخصّص: نقرات أزرار الدعوة (تقدّم للقبول، عرض البرنامج، ...)
  // يظهر في التقارير باسم cta_click ويمكن اعتماده «حدثاً رئيسياً» للقياس
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a.btn, a.nav-cta') : null;
    if (!a) return;
    gtag('event', 'cta_click', {
      link_text: (a.textContent || '').trim().replace(/\s+/g, ' '),
      link_url: a.getAttribute('href') || '',
      page_path: location.pathname
    });
  });
})();
