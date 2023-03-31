if (location.pathname.endsWith('.html')) {
    var newUrl = location.pathname.slice(0, -5);
    window.history.replaceState({}, document.title, newUrl);
  }