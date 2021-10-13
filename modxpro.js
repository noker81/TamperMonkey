// ==UserScript==
// @name         User font
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://modx.pro/
// @include      https://modx.pro/*
// @icon         https://www.google.com/s2/favicons?domain=modx.pro
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('body').style.fontFamily = 'Arial';
})();
