// ==UserScript==
// @name
// @namespace
// @version      0.1
// @description  Automation for ytnk
// @author       Kazim Ozkurt
// @match        https://ytnk.tv/egitim-izle/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ytnk.tv
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  setInterval(() => {
    try {
      document.querySelector(".swal-button.swal-button--nextone").click();
    } catch {}
    document.querySelector("video").play();
  }, 4000);
})();
