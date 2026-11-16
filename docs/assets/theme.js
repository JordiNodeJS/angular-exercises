(function () {
  'use strict';

  var KEY = 'docs-theme';
  var root = document.documentElement;

  function stored() {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  }

  function prefersDark() {
    return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function resolved() {
    var saved = stored();
    if (saved === 'dark' || saved === 'light') return saved;
    return prefersDark() ? 'dark' : 'light';
  }

  function paint(theme) {
    root.setAttribute('data-theme', theme);
    var dark = theme === 'dark';

    var button = document.querySelector('.theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', dark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
      button.setAttribute('title', dark ? 'Tema oscuro' : 'Tema claro');
    }
  }

  paint(resolved());

  document.addEventListener('click', function (event) {
    if (!event.target.closest || !event.target.closest('.theme-toggle')) return;

    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    paint(next);

    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* modo privado o almacenamiento bloqueado: el cambio dura esta vista */
    }
  });

  window.addEventListener('storage', function (event) {
    if (event.key === KEY) paint(resolved());
  });
})();
