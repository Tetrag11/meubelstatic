const menutl = gsap.timeline();
const closemenu = gsap.timeline();

window.onresize = getridofElements;

function getridofElements() {
  var viewportwidth;
  var viewportheight;

  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

  if (typeof window.innerWidth != "undefined") {
    (viewportwidth = window.innerWidth), (viewportheight = window.innerHeight);
  }

  // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
  else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    (viewportwidth = document.documentElement.clientWidth),
      (viewportheight = document.documentElement.clientHeight);
  }

  // older versions of IE
  else {
    (viewportwidth = document.getElementsByTagName("body")[0].clientWidth),
      (viewportheight = document.getElementsByTagName("body")[0].clientHeight);
  }

  if (viewportwidth > 1024) {
    document.querySelector(".explore-link").classList.replace("white", "black");
  }
}

function openMenu() {
  var viewportwidth;
  var viewportheight;

  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

  if (typeof window.innerWidth != "undefined") {
    (viewportwidth = window.innerWidth), (viewportheight = window.innerHeight);
  }

  // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
  else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    (viewportwidth = document.documentElement.clientWidth),
      (viewportheight = document.documentElement.clientHeight);
  }

  // older versions of IE
  else {
    (viewportwidth = document.getElementsByTagName("body")[0].clientWidth),
      (viewportheight = document.getElementsByTagName("body")[0].clientHeight);
  }

  if (viewportwidth <= 1024) {
    document.querySelector(".explore-link").classList.replace("black", "white");
    menutl
      .to(".fsm", { display: "block", opacity: 1 })
      .to(".menu", { display: "none", opacity: 0 }, "<")
      .to(".closemenu", { display: "block", opacity: 1 }, "<0.5");
  } else {
    document.querySelector(".fsm").style.display = "none";
  }
}

function closeMenu() {
  var viewportwidth;
  var viewportheight;

  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

  if (typeof window.innerWidth != "undefined") {
    (viewportwidth = window.innerWidth), (viewportheight = window.innerHeight);
  }

  // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
  else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    (viewportwidth = document.documentElement.clientWidth),
      (viewportheight = document.documentElement.clientHeight);
  }

  // older versions of IE
  else {
    (viewportwidth = document.getElementsByTagName("body")[0].clientWidth),
      (viewportheight = document.getElementsByTagName("body")[0].clientHeight);
  }
  if (viewportwidth <= 1024) {
    document.querySelector(".explore-link").classList.replace("white", "black");
    closemenu
      .to(".fsm", { display: "none", opacity: 0 })
      .to(".closemenu", { display: "none", opacity: 0 }, "<")
      .to(".menu", { display: "block", opacity: 1 }, "<0.5");
  } else {
    document.querySelector(".fsm").style.display = "none";
  }
}
