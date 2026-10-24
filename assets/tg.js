// Telegram WebApp yordamchisi: initData'ni har so'rovga qo'shadi.
(function () {
  var initData = "";
  try {
    initData = (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData) || "";
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.ready) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  } catch (e) { initData = ""; }

  window.tgInitData = initData;

  window.tgFetch = function (url, opts) {
    opts = opts || {};
    var headers = opts.headers || {};
    if (initData) headers["X-Tg-Init"] = initData;
    opts.headers = headers;
    return fetch(url, opts);
  };
})();
