// Language toggle: switches the whole page between English and Chinese.
// Remembers the choice in localStorage so it persists across visits.
(function () {
  var KEY = "site-lang";
  var body = document.body;
  var btn = document.getElementById("lang-toggle");

  function apply(lang) {
    body.classList.remove("lang-en", "lang-zh");
    body.classList.add(lang === "zh" ? "lang-zh" : "lang-en");
    document.documentElement.lang = lang === "zh" ? "zh" : "en";
  }

  // Initial language: saved choice, else browser preference, else English.
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var initial = saved || (navigator.language && navigator.language.indexOf("zh") === 0 ? "zh" : "en");
  apply(initial);

  if (btn) {
    btn.addEventListener("click", function () {
      var next = body.classList.contains("lang-zh") ? "en" : "zh";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }
})();
