angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html>\r\n<html ng-app=\"app\">\r\n\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <title>Gestion CJN</title>\r\n    <!-- bower:css -->\r\n    <!-- endbower -->\r\n  </head>\r\n    \r\n  <body>\r\n    <article>\r\n      <header>\r\n        <h2>Gestion CJN</h2>\r\n      </header>\r\n      \r\n      <section ui-view></section>\r\n      \r\n      <a ui-sref=\"state1\">Ir a 1</a>\r\n      <footer>\r\n        <time datetime=\"2015-05-15 19:00\">May 15</time>\r\n      </footer>\r\n\r\n    </article>\r\n    <!-- bower:js -->\r\n    <!-- endbower -->\r\n    <script src=\"js/all.min.js\"></script>\r\n    <script src=\"templates/templates.js\"></script>\r\n  </body>\r\n\r\n</html>");
$templateCache.put("cofrades/cofrades.html","Prueba TemplateCache1\r\n");}]);