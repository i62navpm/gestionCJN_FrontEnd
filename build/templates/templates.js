angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html>\r\n<html ng-app=\"app\">\r\n\r\n  <head>\r\n    <meta name=\"viewport\" content=\"initial-scale=1\" />\r\n    <meta charset=\"UTF-8\" />\r\n    <title>Gestion CJN</title>\r\n    <!-- bower:css -->\r\n    <!-- endbower -->\r\n    <link href=\"css/all.min.css\" rel=\"stylesheet\">\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n  </head>\r\n    \r\n  <body layout=\"column\" ng-controller=\'AppCtrl as app\'>\r\n\r\n    <md-toolbar layout=\"row\">\r\n      <div class=\"md-toolbar-tools\">\r\n        <md-button ng-click=\"app.toggleSidenav(\'menuIzquierdo\')\" hide-gt-sm class=\"md-icon-button\">\r\n          <md-icon md-font-library=\"material-icons\">menu</md-icon>\r\n        </md-button>\r\n        <h1>Gestion CJN</h1>\r\n      </div>\r\n    </md-toolbar>\r\n\r\n    <div layout=\"row\" flex>\r\n        <md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"menuIzquierdo\" md-is-locked-open=\"$mdMedia(\'gt-sm\')\">\r\n          \r\n          <md-list>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Cofrades</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Costaleros</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Aspirantes</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Directivos</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Autoridades</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Sectores</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Papeletas de Sitio</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Configuración</p>\r\n            </md-list-item>\r\n          <md-list>\r\n\r\n        </md-sidenav>\r\n        \r\n        <div layout=\"column\" flex id=\"content\">\r\n            <md-content layout=\"column\" flex class=\"md-padding page-container\" ui-view></md-content>\r\n        </div>\r\n    \r\n    </div>\r\n\r\n    <!-- bower:js -->\r\n    <!-- endbower -->\r\n    <script src=\"js/all.min.js\"></script>\r\n    <script src=\"templates/templates.js\"></script>\r\n  </body>\r\n\r\n</html>");
$templateCache.put("cofrades/cofrades.html","<md-tabs md-dynamic-height md-border-bottom md-stretch-tabs=\"always\" class=\"md-whiteframe-z2 cofrades\">\r\n  \r\n  <md-tab label=\"Altas\">\r\n    <md-content class=\"md-padding\">\r\n      \r\n      <md-input-container class=\"md-icon-float\">\r\n        <label>Buscar</label>\r\n        <md-icon md-font-library=\"material-icons\">search</md-icon>\r\n        <input ng-model=\"vm.buscar\" ng-change=\"vm.busqueda()\" type=\"text\">\r\n      </md-input-container>\r\n      \r\n      <md-radio-group ng-model=\"vm.filtro\"  layout=\"row\" layout-align=\"space-around start\">\r\n        <md-radio-button value=\"nombre\">Nombre</md-radio-button>\r\n        <md-radio-button value=\"numeroOrden\">Número de orden</md-radio-button>\r\n      </md-radio-group>\r\n\r\n    </md-content>\r\n\r\n    <md-divider></md-divider>\r\n    \r\n    <md-content class=\"lista-cofrades\" flex>\r\n      <md-list-item class=\"md-2-line\" ng-repeat=\"cofrade in vm.cofrades\" ng-click=\"goToCofrade(person.name, $event)\">\r\n        <h3 flex=\"10\" class=\"numeroOrden\">{{cofrade.numeroOrden}}</h3>\r\n        <div class=\"md-list-item-text\" offset=\"5\">\r\n          <h4>{{cofrade.datosPersonales.nombre}} {{cofrade.datosPersonales.apellido1}} {{cofrade.datosPersonales.apellido2}}</h4>\r\n          <p class=\"direccion\">{{cofrade.datosPersonales.direccion.calle}}, {{cofrade.datosPersonales.direccion.municipio}}, {{cofrade.datosPersonales.direccion.provincia}}</p>\r\n        </div>\r\n        <md-icon md-font-library=\"material-icons\" ng-click=\"\" aria-label=\"Modifica Cofrade\" class=\"md-secondary md-hue-3\" ng-class=\"md-primary\">search</md-icon>\r\n      </md-list-item>\r\n    </md-content>\r\n    \r\n\r\n  </md-tab>\r\n  \r\n  <md-tab label=\"Bajas\">\r\n    <md-content class=\"md-padding\">\r\n      <h1 class=\"md-display-2\">Bajas</h1>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit. Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec orci posuere, nec luctus mauris semper.</p>\r\n      <p>Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis. Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel. Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed nisl consectetur, rhoncus sapien sit amet, tempus sapien.</p>\r\n      <p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p>\r\n    </md-content>\r\n  </md-tab>\r\n\r\n</md-tabs>");}]);