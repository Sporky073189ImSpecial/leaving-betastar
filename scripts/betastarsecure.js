// ==UserScript==
// @name         BetastarSecure TM
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  no bad things xotic! even though you don't own the site anymore you still have admin!
// @author       zastix & VillainsRule
// @match        https://betastar.org/*
// @icon         https://betastarutils.github.io/assets/siteLogo.png
// @grant        none
// ==/UserScript==

/*
--------------------------------------------------------------------
VERSION 2.0 RELEASE NOTES                                           |
 - Removes Xotic's tracking windows as soon as site loads
 - Auto Disableds announcements, run, & clear as soon as enabled.   |
--------------------------------------------------------------------
*/
var scripts = document. getElementsByTagName("script");
scripts[0].remove();
var f = document.getElementById('938619424');
f.remove();
socket.off('clear')
socket.off('run')
socket.off('announcement')
socket.on('announcement', () => { socket.off('announcement') });
socket.on('run', () => { socket.off('run') });
socket.on('clear', () => { socket.off('clear') });
