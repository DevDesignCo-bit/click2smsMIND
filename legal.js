(() => {
  'use strict';
  const params = new URLSearchParams(window.location.search);
  const destinations = {
    entry: 'index.html',
    pin: 'index.html',
    c2s: 'index.html',
    writer: 'home.html',
    train: 'home.html'
  };
  const requested = params.get('from');
  const from = Object.prototype.hasOwnProperty.call(destinations,requested) ? requested : 'entry';
  const language = params.get('lang') === 'en' ? 'en' : 'sv';
  document.querySelectorAll('[data-return]').forEach(link => {
    link.href = destinations[from] + '?lang=' + language;
    link.setAttribute('aria-label',language === 'en' ? 'Back' : 'Tillbaka');
  });
  document.querySelectorAll('[data-document]').forEach(link => {
    link.href = link.dataset.document + '?from=' + from + '&lang=' + language;
  });
})();
