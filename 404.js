// Solo en GitHub Pages (tools/pages_export.py): /ruta/ → /ruta, como hacía el Worker.
(function () {
  var p = location.pathname, s = {"/musica/": "/explorar#musica", "/zona/": "/explorar#zonas", "/sala/": "/explorar#salas"};
  if (s[p]) { location.replace(s[p]); return; }
  var q = p.replace(/\/+$/, "");
  if (q && q !== p) location.replace(q + location.search + location.hash);
})();
