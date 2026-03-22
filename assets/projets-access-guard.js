/**
 * Doit être chargé en premier dans le <body> des pages projets/*.html.
 * Redirige vers la galerie si la session n’a pas été déverrouillée depuis projets.html.
 */
(function () {
  'use strict';
  var KEY = 'yg_projets_unlock';
  try {
    if (sessionStorage.getItem(KEY) === '1') return;
  } catch (e) {
    /* private mode / storage bloqué → on laisse voir la page pour ne pas bloquer l’accès */
    return;
  }
  window.location.replace('../projets.html');
})();
