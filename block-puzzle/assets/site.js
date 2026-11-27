// Language switch (en / ko). Remembers the choice; defaults to the browser language.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var lang = saved || ((navigator.language || 'en').toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en');
  function apply(l) {
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l);
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === l));
    });
    var t = document.querySelector('meta[name="title-' + l + '"]');
    if (t) document.title = t.content;
  }
  apply(lang);
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.lang button');
    if (!b) return;
    apply(b.dataset.lang);
    try { localStorage.setItem('lang', b.dataset.lang); } catch (e) {}
  });
})();
