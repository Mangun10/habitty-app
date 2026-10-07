// Habitty case study: small progressive enhancements only.
// The page is complete without JavaScript.
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  // Mobile contents menu.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var close = function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (event) {
      if (event.target instanceof HTMLAnchorElement) close();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        close();
        toggle.focus();
      }
    });
  }

  if (!("IntersectionObserver" in window)) return;

  // Highlight the section in view.
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var byId = {};
  links.forEach(function (link) {
    byId[link.getAttribute("href").slice(1)] = link;
  });
  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || !byId[entry.target.id]) return;
        links.forEach(function (link) {
          link.removeAttribute("aria-current");
        });
        byId[entry.target.id].setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) spy.observe(section);
  });

  // A quiet fade-in as sections arrive (skipped when reduced motion is preferred).
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var targets = document.querySelectorAll(".section > *:not(.kicker), .closing > *");
  var reveal = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          reveal.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  Array.prototype.forEach.call(targets, function (element) {
    element.classList.add("reveal");
    reveal.observe(element);
  });
})();
