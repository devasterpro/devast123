// ==UserScript==
// @name         Aimbot
// @version      2.3
// @description  Devast Aimbot
// @author       devaroach
// @include http://*
// @include https://*
// @icon            https://devast.io/img/favicon.png
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    function injectScript(scriptContent) {
        var scriptElement = document.createElement('script');
        scriptElement.textContent = scriptContent;
        document.head.appendChild(scriptElement);
    }
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/devasterpro/devast123/main/aimbot.js',
        onload: function(response) {
            if (response.status === 200) {
                var scriptContent = response.responseText;
                injectScript(scriptContent);
            }
        }
    });
})();
