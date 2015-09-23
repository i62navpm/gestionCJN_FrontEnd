angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html>\r\n<html ng-app=\"app\">\r\n\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <title>Gestion CJN</title>\r\n    <!-- bower:css -->\r\n    <!-- endbower -->\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n  </head>\r\n    \r\n  <body layout=\"column\" ng-controller=\'AppCtrl as app\'>\r\n    <md-toolbar layout=\"row\">\r\n      <div class=\"md-toolbar-tools\">\r\n        <md-button ng-click=\"app.toggleSidenav(\'menuIzquierdo\')\" hide-gt-sm class=\"md-icon-button\">\r\n          <md-icon aria-label=\"Menu\" md-svg-icon=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/68133/menu.svg\"></md-icon>\r\n        </md-button>\r\n        <h1>Gestion CJN</h1>\r\n\r\n      </div>\r\n    </md-toolbar>\r\n    <div layout=\"row\" flex>\r\n        <md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"menuIzquierdo\" md-is-locked-open=\"$mdMedia(\'gt-sm\')\">\r\n          <md-list>\r\n            <md-list-item ng-click=\"navigateTo(\'data usage\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Data Usage</p>\r\n            </md-list-item>\r\n          <md-list>\r\n        </md-sidenav>\r\n        \r\n        <div layout=\"column\" flex id=\"content\">\r\n            <md-content layout=\"column\" flex class=\"md-padding\" ui-view>\r\n            \r\n            </md-content>\r\n            <a ui-sref=\"cofrades\">Ir a 1</a>\r\n        </div>\r\n    \r\n    </div>\r\n\r\n    <!-- bower:js -->\r\n    <!-- endbower -->\r\n    <script src=\"js/all.min.js\"></script>\r\n    <script src=\"templates/templates.js\"></script>\r\n  </body>\r\n\r\n</html>");
$templateCache.put("cofrades/cofrades.html","Prueba TemplateCache 2\r\n");}]);