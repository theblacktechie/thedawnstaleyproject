/* =========================================================
   The Dawn Staley Project — script.js
   Hash-based tab routing. Each tab has its own URL fragment
   so individual tabs can be linked to and shared.
   ========================================================= */

(function () {
  'use strict';

  var VALID_TABS = ['home', 'project', 'road', 'work', 'about'];
  var DEFAULT_TAB = 'home';

  var tabs = document.querySelectorAll('.nav-tab');
  var contents = document.querySelectorAll('.tab-content');

  function showTab(tabId) {
    if (VALID_TABS.indexOf(tabId) === -1) {
      tabId = DEFAULT_TAB;
    }

    contents.forEach(function (c) {
      c.classList.remove('active');
    });
    tabs.forEach(function (t) {
      t.classList.remove('active');
    });

    var content = document.getElementById(tabId);
    var tab = document.querySelector('.nav-tab[data-tab="' + tabId + '"]');

    if (content) content.classList.add('active');
    if (tab) tab.classList.add('active');

    // Update document title for context
    var titles = {
      home: 'The Dawn Staley Project',
      project: 'The Project · The Dawn Staley Project',
      road: 'The Road · The Dawn Staley Project',
      work: 'The Work · The Dawn Staley Project',
      about: 'About · The Dawn Staley Project'
    };
    document.title = titles[tabId] || titles.home;

    // Move focus to the active panel for keyboard users (without scrolling)
    if (content) {
      content.setAttribute('tabindex', '-1');
      content.focus({ preventScroll: true });
    }
  }

  function getCurrentTab() {
    var hash = (window.location.hash || '').replace(/^#/, '');
    return VALID_TABS.indexOf(hash) !== -1 ? hash : DEFAULT_TAB;
  }

  // Tab click — let the hash change drive the state change
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      var target = tab.getAttribute('data-tab');
      // Allow the browser to update the hash; we react to the hashchange event.
      // This keeps back/forward navigation working correctly.
      if (window.location.hash === '#' + target) {
        // Same tab clicked — re-show it (helps if user wants to "reset")
        e.preventDefault();
        showTab(target);
      }
    });
  });

  window.addEventListener('hashchange', function () {
    showTab(getCurrentTab());
    // Ensure we don't scroll mid-page when switching tabs
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  });

  // Initial render
  showTab(getCurrentTab());
})();
