angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html>\r\n<html ng-app=\"app\">\r\n\r\n  <head>\r\n    <meta name=\"viewport\" content=\"initial-scale=1\" />\r\n    <meta charset=\"UTF-8\" />\r\n    <title>Gestion CJN</title>\r\n    <!-- bower:css -->\r\n    <!-- endbower -->\r\n    <link href=\"css/all.min.css\" rel=\"stylesheet\">\r\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n  </head>\r\n    \r\n  <body layout=\"column\" ng-controller=\'AppCtrl as app\'>\r\n\r\n    <md-toolbar layout=\"row\">\r\n      <div class=\"md-toolbar-tools\">\r\n        <md-button ng-click=\"app.toggleSidenav(\'menuIzquierdo\')\" hide-gt-sm class=\"md-icon-button\">\r\n          <md-icon md-font-library=\"material-icons\">menu</md-icon>\r\n        </md-button>\r\n        <h1>Gestion CJN</h1>\r\n      </div>\r\n    </md-toolbar>\r\n\r\n    <div layout=\"row\" flex>\r\n        <md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"menuIzquierdo\" md-is-locked-open=\"$mdMedia(\'gt-sm\')\">\r\n          \r\n          <md-list>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', \'menuIzquierdo\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Cofrades</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', \'menuIzquierdo\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Costaleros</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', \'menuIzquierdo\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Aspirantes</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', \'menuIzquierdo\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Directivos</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', \'menuIzquierdo\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Autoridades</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', \'menuIzquierdo\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Sectores</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', \'menuIzquierdo\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Papeletas de Sitio</p>\r\n            </md-list-item>\r\n            <md-list-item ng-click=\"app.navigateTo(\'cofrades\', \'menuIzquierdo\', $event)\">\r\n              <md-icon md-font-library=\"material-icons\">cloud</md-icon>\r\n              <p>Configuración</p>\r\n            </md-list-item>\r\n          <md-list>\r\n\r\n        </md-sidenav>\r\n        \r\n        <div layout=\"column\" flex id=\"content\">\r\n            <md-content layout=\"column\" flex class=\"md-padding page-container\" ui-view scrolly></md-content>\r\n        </div>\r\n    \r\n    </div>\r\n\r\n    <!-- bower:js -->\r\n    <!-- endbower -->\r\n    <script src=\"js/all.min.js\"></script>\r\n    <script src=\"templates/templates.js\"></script>\r\n  </body>\r\n\r\n</html>");
$templateCache.put("cofrades/add/cofradeNuevo.html","<div layout=\"row\" layout-align=\"center center\">\r\n  <div flex flex-gt-md=\"80\" class=\"md-primary md-whiteframe-z2 listaCofrades\">\r\n    <form name=\"cofradeForm\" novalidate>\r\n    <md-toolbar>\r\n      <div class=\"md-toolbar-tools\">\r\n        <md-button class=\"md-icon-button\" aria-label=\"Detalles Cofrade\" ng-click=\"vm.backState()\">\r\n          <md-icon md-font-library=\"material-icons\">arrow_back</md-icon>\r\n        </md-button>\r\n        <h4>\r\n          <span>\r\n            {{vm.cofrade.datosPersonales.nombre}} {{vm.cofrade.datosPersonales.apellido1}} {{vm.cofrade.datosPersonales.apellido2}}\r\n          </span>\r\n        </h4>\r\n        <span flex></span>\r\n        <md-button class=\"md-icon-button\" aria-label=\"Detalles Cofrade\" ng-click=\"vm.guardar(cofradeForm.$valid)\"  type=\"submit\">\r\n          <md-icon md-font-library=\"material-icons\">save</md-icon>\r\n        </md-button>\r\n      </div>\r\n    </md-toolbar>\r\n\r\n\r\n    <md-content class=\"md-padding\">\r\n      <div layout=\"row\" id=\"toastBounds\"></div>\r\n      <div layout layout-padding class=\"md-padding\" layout-align=\"space-around center\">\r\n        <div class=\"md-2-line cofrade-detalle\" flex=\"40\">\r\n          <div class=\"md-item-text md-whiteframe-z1\">\r\n            <h3>Número de<br>orden</h3>\r\n            <p>{{vm.cofrade.numeroOrden}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"md-2-line cofrade-detalle\" flex=\"40\">\r\n          <div class=\"md-item-text md-whiteframe-z1\">\r\n            <h3>Número de<br>cofrade</h3>\r\n            <p>{{vm.cofrade.numeroCofrade}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      \r\n      \r\n      <md-tabs md-dynamic-height md-border-bottom md-stretch-tabs=\"always\">\r\n      \r\n        <!-- DATOS PERSONALES -->\r\n        <md-tab>\r\n          <md-tab-label>\r\n            <md-icon md-font-library=\"material-icons\">person</md-icon>\r\n          </md-tab-label>\r\n          <md-content class=\"md-padding\">\r\n            <h1>Datos personales</h1>\r\n            \r\n            <div layout layout-sm=\"column\">\r\n              <md-input-container class=\"md-icon-float\" flex=\"75\">\r\n                <label>Nombre</label>\r\n                <md-icon md-font-library=\"material-icons\">face</md-icon>\r\n                <input name=\"nombre\" ng-model=\"vm.cofrade.datosPersonales.nombre\" required>\r\n                <div ng-messages=\"cofradeForm.nombre.$error\" ng-if=\"cofradeForm.nombre.$dirty || cofradeForm.nombre.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">El nombre es obligatorio</div>\r\n                </div>\r\n              </md-input-container>\r\n            </div>\r\n            \r\n            <div layout layout-sm=\"column\">\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Primer apellido</label>\r\n                <md-icon md-font-library=\"material-icons\"></md-icon>\r\n                <input name=\"apellido1\" ng-model=\"vm.cofrade.datosPersonales.apellido1\" required>\r\n                <div ng-messages=\"cofradeForm.apellido1.$error\" ng-if=\"cofradeForm.apellido1.$dirty || cofradeForm.apellido1.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">El apellido es obligatorio</div>\r\n                </div>\r\n              </md-input-container>\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Segundo apellido</label>\r\n                <md-icon md-font-library=\"material-icons\"></md-icon>\r\n                <input name=\"apellido2\" ng-model=\"vm.cofrade.datosPersonales.apellido2\" required>\r\n                <div ng-messages=\"cofradeForm.apellido2.$error\" ng-if=\"cofradeForm.apellido2.$dirty || cofradeForm.apellido2.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">El apellido es obligatorio</div>\r\n                </div>\r\n              </md-input-container>\r\n            </div>\r\n\r\n            <div layout layout-sm=\"column\" layout-align=\"space-between center\">\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>DNI</label>\r\n                <md-icon md-font-library=\"material-icons\">credit_card</md-icon>\r\n                <input name=\"dni\" ng-model=\"vm.cofrade.datosPersonales.dni\" maxlength=\"9\" pattern=\"(\\d{8})([a-zA-Z]{1})\">\r\n                <div ng-messages=\"cofradeForm.dni.$error\" ng-if=\"cofradeForm.dni.$dirty || cofradeForm.dni.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"pattern\">Introduce un DNI válido 00000000X</div>\r\n                </div>\r\n              </md-input-container>\r\n              <md-input-container flex=\"45\">\r\n                <label>Sexo</label>\r\n                  <md-select ng-model=\"vm.cofrade.datosPersonales.sexo\">\r\n                    <md-option value=\"Hombre\">Hombre</md-option>\r\n                    <md-option value=\"Mujer\">Mujer</md-option>\r\n                  </md-select>\r\n              </md-input-container>\r\n            </div>\r\n\r\n            <div layout layout-sm=\"column\">\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Teléfono</label>\r\n                <md-icon md-font-library=\"material-icons\">local_phone</md-icon>\r\n                <input name=\"telefono\" ng-model=\"vm.cofrade.datosPersonales.telefono\" maxlength=\"9\" pattern=\"(\\d{9})\">\r\n                <div ng-messages=\"cofradeForm.telefono.$error\" ng-if=\"cofradeForm.telefono.$dirty || cofradeForm.telefono.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"pattern\">Introduce un teléfono válido</div>\r\n                </div>\r\n              </md-input-container>\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Email</label>\r\n                <md-icon md-font-library=\"material-icons\">email</md-icon>\r\n                 <input name=\"email\" ng-model=\"vm.cofrade.datosPersonales.email\" type=\"email\">\r\n                 <div ng-messages=\"cofradeForm.email.$error\" ng-if=\"cofradeForm.email.$dirty || cofradeForm.email.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"email\">Introduce un email válido</div>\r\n                </div>\r\n              </md-input-container>\r\n            </div>\r\n\r\n             <div layout layout-sm=\"column\">\r\n              <div flex=\"50\" layout=\"column\" layout-align=\"center center\">\r\n                <label>Fecha de nacimiento</label>\r\n                <md-datepicker name=\"fechaNacimiento\" ng-model=\"vm.cofrade.datosPersonales.fechaNacimiento\" md-placeholder=\"Fecha de nacimiento\" required></md-datepicker>\r\n                <div class=\"validation-messages\" ng-messages=\"cofradeForm.fechaNacimiento.$error\" ng-if=\"cofradeForm.fechaNacimiento.$dirty || cofradeForm.fechaNacimiento.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">Introduce una fecha</div>\r\n                </div>\r\n              </div>\r\n              <div flex=\"50\" layout=\"column\" layout-align=\"center center\">\r\n                <label>Fecha de inscripción</label>\r\n                <md-datepicker name=\"fechaInscripcion\" ng-model=\"vm.cofrade.datosPersonales.fechaInscripcion\" md-placeholder=\"Fecha de inscripcion\" required></md-datepicker>\r\n                <div class=\"validation-messages\" ng-messages=\"cofradeForm.fechaInscripcion.$error\" ng-if=\"cofradeForm.fechaInscripcion.$dirty || cofradeForm.fechaInscripcion.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">Introduce una fecha</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <h4><md-icon md-font-library=\"material-icons\">place</md-icon>Dirección</h4>\r\n            <div layout layout-sm=\"column\" layout-align=\"space-between center\">\r\n              <div flex=\"70\">\r\n                <md-autocomplete required\r\n                  md-input-name=\"calle\"\r\n                  md-search-text=\"vm.searchText\"\r\n                  md-selected-item=\"vm.calleSelected\"\r\n                  md-selected-item-change=\"vm.selectedItemChange(item)\"\r\n                  md-items=\"item in vm.querySearch(vm.searchText)\"\r\n                  md-item-text=\"item.calle\"\r\n                  md-min-length=\"0\"\r\n                  md-floating-label=\"Selecciona una calle\"\r\n                  md-menu-class=\"autocomplete-custom-template\">\r\n                 <md-item-template>\r\n                    <span class=\"item-title\">\r\n                      <md-icon md-font-library=\"material-icons\">map</md-icon>\r\n                      <span> {{item.calle}} </span>\r\n                    </span>\r\n                    <span class=\"item-metadata\">\r\n                      <span class=\"item-metastat\">\r\n                        <strong>{{item.municipio}}</strong> - {{item.provincia}}\r\n                      </span>\r\n                    </span>\r\n                  </md-item-template>\r\n                  <md-not-found>\r\n                    No hay coincidencias para: \"{{vm.searchText}}\".\r\n                  </md-not-found>\r\n\r\n                  <div ng-messages=\"cofradeForm.calle.$error\" ng-if=\"cofradeForm.calle.$dirty || cofradeForm.calle.$touched || cofradeForm.$submitted\">\r\n                    <div ng-message=\"required\">La calle es obligatoria</div>\r\n                  </div>\r\n                </md-autocomplete>\r\n              </div>\r\n              <md-input-container flex=\"25\">\r\n                <label>Sector</label>\r\n                <input name=\"sector\" ng-model=\"vm.sector\" type=\"number\" ng-readonly=\"!vm.nuevaCalle\">\r\n                <div ng-messages=\"cofradeForm.sector.$error\" ng-if=\"cofradeForm.sector.$dirty || cofradeForm.sector.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">El sector es obligatorio</div>\r\n                </div>\r\n              </md-input-container>\r\n            </div>\r\n            <div layout layout-sm=\"column\" layout-align=\"space-between center\">\r\n              <md-input-container  flex=\"25\">\r\n                <label>Número</label>\r\n                <input name=\"numero\" ng-model=\"vm.cofrade.datosPersonales.direccion.numero\" required>\r\n                <div ng-messages=\"cofradeForm.numero.$error\" ng-if=\"cofradeForm.numero.$dirty || cofradeForm.numero.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">El número es obligatorio</div>\r\n                </div>\r\n              </md-input-container>\r\n              <md-input-container  flex=\"40\">\r\n                <label>Planta</label>\r\n                <input name=\"\" ng-model=\"vm.cofrade.datosPersonales.direccion.planta\" type=\"text\">\r\n              </md-input-container>\r\n              <md-input-container  flex=\"35\">\r\n                <label>Piso</label>\r\n                <input name=\"\" ng-model=\"vm.cofrade.datosPersonales.direccion.piso\" type=\"text\">\r\n              </md-input-container>\r\n            </div>\r\n            <div layout layout-sm=\"column\" layout-align=\"space-between center\">\r\n              <md-input-container  flex=\"70\">\r\n                <label>Municipio</label>\r\n                <input name=\"municipio\" ng-model=\"vm.cofrade.datosPersonales.direccion.municipio\" required>\r\n                <div ng-messages=\"cofradeForm.municipio.$error\" ng-if=\"cofradeForm.municipio.$dirty || cofradeForm.municipio.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">El municipio es obligatorio</div>\r\n                </div>\r\n              </md-input-container>\r\n              <md-input-container  flex=\"25\" required>\r\n                <label>Código postal</label>\r\n                <input name=\"cp\" ng-model=\"vm.cofrade.datosPersonales.direccion.cp\" type=\"number\" required>\r\n                <div ng-messages=\"cofradeForm.cp.$error\" ng-if=\"cofradeForm.cp.$dirty || cofradeForm.cp.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">El código postal es obligatorio</div>\r\n                </div>\r\n              </md-input-container>\r\n            </div>\r\n            <div layout layout-sm=\"column\">\r\n              <md-input-container>\r\n                <label>Provincia</label>\r\n                <input name=\"provincia\" ng-model=\"vm.cofrade.datosPersonales.direccion.provincia\" required>\r\n                <div ng-messages=\"cofradeForm.provincia.$error\" ng-if=\"cofradeForm.provincia.$dirty || cofradeForm.provincia.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"required\">La provinica es obligatoria</div>\r\n                </div>\r\n              </md-input-container>\r\n            </div>\r\n\r\n            <div layout=\"column\">\r\n              <h4><md-icon md-font-library=\"material-icons\">insert_comment</md-icon> Nota</h4>\r\n              <md-input-container flex>\r\n                <label>Nota</label>\r\n                <textarea ng-model=\"vm.cofrade.datosPersonales.nota\"></textarea>\r\n              </md-input-container>\r\n            </div>\r\n          </md-content>\r\n        </md-tab>\r\n\r\n        <!-- DATOS FINANCIEROS -->\r\n        <md-tab>\r\n          <md-tab-label>\r\n            <md-icon md-font-library=\"material-icons\">account_balance</md-icon>\r\n          </md-tab-label>\r\n          <md-content class=\"md-padding\">\r\n            <h1>Datos bancarios</h1>\r\n            <div layout=\"column\">\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>IBAN</label>\r\n                <md-icon md-font-library=\"material-icons\">attach_money</md-icon>\r\n                <input name=\"iban\" ng-model=\"vm.cofrade.datosFinancieros.cuenta.iban\" type=\"text\" pattern=\"([a-zA-Z]{2})(\\d{22})\" maxlength=\"24\" ng-blur=\"vm.calcularCC()\">\r\n                <div ng-messages=\"cofradeForm.iban.$error\" ng-if=\"cofradeForm.iban.$dirty || cofradeForm.iban.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"pattern\">Introduce un IBAN válido ES0000000000000000000000</div>\r\n                </div>\r\n              </md-input-container>\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>CC</label>\r\n                <md-icon md-font-library=\"material-icons\"></md-icon>\r\n                 <input name=\"cc\" ng-model=\"vm.cofrade.datosFinancieros.cuenta.cc\" pattern=\"(\\d{20})\" maxlength=\"20\" ng-blur=\"vm.calcularIban()\">\r\n                 <div ng-messages=\"cofradeForm.cc.$error\" ng-if=\"cofradeForm.cc.$dirty || cofradeForm.cc.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"pattern\">Introduce una CC válida 00000000000000000000</div>\r\n                </div>\r\n              </md-input-container>\r\n            </div>\r\n            \r\n            <div layout layout-sm=\"column\">\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Banco</label>\r\n                <md-icon md-font-library=\"material-icons\">account_balance</md-icon>\r\n                <input name=\"\" ng-model=\"vm.cofrade.datosFinancieros.banco\" type=\"text\">\r\n              </md-input-container>\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Driección del banco</label>\r\n                <md-icon md-font-library=\"material-icons\"></md-icon>\r\n                 <input name=\"\" ng-model=\"vm.cofrade.datosFinancieros.direccionBanco\" type=\"text\">\r\n              </md-input-container>\r\n            </div>\r\n            \r\n            <div layout=\"column\">\r\n              <label><md-icon md-font-library=\"material-icons\">mood_bad</md-icon> Deudas</label>\r\n              <md-chips ng-model=\"vm.cofrade.datosFinancieros.deuda\" flex>\r\n                <input placeholder=\"Introduzca un año XXXX\" maxlength=\"4\">\r\n                <md-chip-template>\r\n                  <strong>{{$chip}}</strong>\r\n                </md-chip-template>\r\n              </md-chips>\r\n            </div>\r\n            \r\n            <div layout layout-sm=\"column\">\r\n              <md-checkbox flex=\"50\" aria-label=\"Domiciliar pagos\" ng-model=\"vm.cofrade.datosFinancieros.domiciliarPagos\" class=\"md-primary\">\r\n                Pagos domicilados\r\n              </md-checkbox>\r\n              <md-checkbox flex=\"40\" aria-label=\"Domiciliar loteria\" ng-model=\"vm.cofrade.datosFinancieros.domiciliarLoteria\" class=\"md-primary\">\r\n                Lotería domiciliada\r\n              </md-checkbox>\r\n            </div>\r\n\r\n          </md-content>\r\n        </md-tab>\r\n        \r\n        <!-- DATOS LOTERIA -->\r\n        <md-tab>\r\n          <md-tab-label>\r\n            <md-icon md-font-library=\"material-icons\">local_play</md-icon>\r\n          </md-tab-label>\r\n          <md-content class=\"md-padding\">\r\n            <h1>Datos Loteria</h1>\r\n            <div layout layout-sm=\"column\">\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Número de Navidad 1</label>\r\n                <md-icon md-font-library=\"material-icons\">local_play</md-icon>\r\n                <input name=\"navidad1\" ng-model=\"vm.cofrade.datosLoteria.numeroNavidad1\" type=\"number\" min=\"0\">\r\n                <div ng-messages=\"cofradeForm.navidad1.$error\" ng-if=\"cofradeForm.navidad1.$dirty || cofradeForm.navidad1.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"min\">El número debe de ser mayor que 0</div>\r\n                </div>\r\n              </md-input-container>\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Número de Navidad 2</label>\r\n                <md-icon md-font-library=\"material-icons\"></md-icon>\r\n                 <input name=\"navidad2\" ng-model=\"vm.cofrade.datosLoteria.numeroNavidad2\" type=\"number\" min=\"0\">\r\n                 <div ng-messages=\"cofradeForm.navidad2.$error\" ng-if=\"cofradeForm.navidad2.$dirty || cofradeForm.navidad2.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"min\">El número debe de ser mayor que 0</div>\r\n                </div>\r\n              </md-input-container>\r\n            </div>\r\n\r\n            <div layout layout-sm=\"column\">\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Número del Niño 1</label>\r\n                <md-icon md-font-library=\"material-icons\">local_play</md-icon>\r\n                <input name=\"ninio1\" ng-model=\"vm.cofrade.datosLoteria.numeroNinio1\" type=\"number\" min=\"0\">\r\n                <div ng-messages=\"cofradeForm.ninio1.$error\" ng-if=\"cofradeForm.ninio1.$dirty || cofradeForm.ninio1.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"min\">El número debe de ser mayor que 0</div>\r\n                </div>\r\n              </md-input-container>\r\n              <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n                <label>Número del Niño 2</label>\r\n                <md-icon md-font-library=\"material-icons\"></md-icon>\r\n                 <input name=\"ninio2\" ng-model=\"vm.cofrade.datosLoteria.numeroNinio2\" type=\"number\" min=\"0\">\r\n                 <div ng-messages=\"cofradeForm.ninio2.$error\" ng-if=\"cofradeForm.ninio2.$dirty || cofradeForm.ninio2.$touched || cofradeForm.$submitted\">\r\n                  <div ng-message=\"min\">El número debe de ser mayor que 0</div>\r\n                </div>\r\n              </md-input-container>\r\n            </div>\r\n\r\n            <div layout layout-sm=\"column\">\r\n              <md-checkbox flex=\"50\" aria-label=\"Domiciliar pagos\" ng-model=\"vm.cofrade.datosLoteria.participacionNavidad\" class=\"md-primary\">\r\n                Participaciones de Navidad\r\n              </md-checkbox>\r\n              <md-checkbox flex=\"40\" aria-label=\"Domiciliar loteria\" ng-model=\"vm.cofrade.datosLoteria.participacionNinio\" class=\"md-primary\">\r\n                Participaciones del niño\r\n              </md-checkbox>\r\n            </div>\r\n            \r\n          </md-content>\r\n        </md-tab>\r\n      </md-tabs>\r\n    \r\n        \r\n    </md-content>\r\n    </form>\r\n  </div>\r\n</div>");
$templateCache.put("cofrades/detail/cofradeDetalle.html","<div layout=\"row\" layout-align=\"center center\">\r\n  <div flex flex-gt-md=\"80\" class=\"md-primary md-whiteframe-z2 listaCofrades\">\r\n    <md-toolbar>\r\n      <div class=\"md-toolbar-tools\">\r\n        <md-button class=\"md-icon-button\" aria-label=\"Detalles Cofrade\" ui-sref=\"cofrades\">\r\n          <md-icon md-font-library=\"material-icons\">arrow_back</md-icon>\r\n        </md-button>\r\n        <h4>\r\n          <span>\r\n            {{vm.cofrade.datosPersonales.nombre}} {{vm.cofrade.datosPersonales.apellido1}} {{vm.cofrade.datosPersonales.apellido2}}\r\n          </span>\r\n        </h4>\r\n        <span flex></span>\r\n        <md-button class=\"md-icon-button\" aria-label=\"Editar Cofrade\" ng-click=\"vm.modifyCofrade(vm.cofrade.id, $event)\">\r\n          <md-icon md-font-library=\"material-icons\">mode_edit</md-icon>\r\n        </md-button>\r\n        <md-button class=\"md-icon-button\" aria-label=\"Eliminar Cofrade\" ng-if=\"(vm.cofrade.numeroOrden && vm.cofrade.numeroCofrade)\">\r\n          <md-icon md-font-library=\"material-icons\">clear</md-icon>\r\n        </md-button>\r\n        <restore-Cofrade cofrade=\"vm.cofrade.id\" ss=\"md-icon-button\" aria-label=\"Eliminar Cofrade\" ng-if=\"(vm.cofrade.numeroOrden && !vm.cofrade.numeroCofrade)\"></restore-Cofrade>\r\n      </div>\r\n    </md-toolbar>\r\n\r\n\r\n    <md-content class=\"md-padding\">\r\n      \r\n      <div layout layout-padding class=\"md-padding\" layout-align=\"space-around center\">\r\n        <div class=\"md-2-line cofrade-detalle\" flex=\"40\">\r\n          <div class=\"md-item-text md-whiteframe-z1\">\r\n            <h3>Número de<br>orden</h3>\r\n            <p>{{vm.cofrade.numeroOrden}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"md-2-line cofrade-detalle\" flex=\"40\">\r\n          <div class=\"md-item-text md-whiteframe-z1\">\r\n            <h3>Número de<br>cofrade</h3>\r\n            <p>{{vm.cofrade.numeroCofrade}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      \r\n\r\n      <md-tabs md-dynamic-height md-border-bottom md-stretch-tabs=\"always\">\r\n      <md-tab>\r\n        <md-tab-label>\r\n          <md-icon md-font-library=\"material-icons\">person</md-icon>\r\n        </md-tab-label>\r\n        <md-content class=\"md-padding\">\r\n          <h1>Datos personales</h1>\r\n          <div layout layout-sm=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"75\">\r\n              <label>Nombre</label>\r\n              <md-icon md-font-library=\"material-icons\">face</md-icon>\r\n              <input ng-model=\"vm.cofrade.datosPersonales.nombre\" type=\"text\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n          \r\n          <div layout layout-sm=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Primer apellido</label>\r\n              <md-icon md-font-library=\"material-icons\"></md-icon>\r\n              <input ng-model=\"vm.cofrade.datosPersonales.apellido1\" type=\"text\" readonly>\r\n            </md-input-container>\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Segundo apellido</label>\r\n              <md-icon md-font-library=\"material-icons\"></md-icon>\r\n              <input ng-model=\"vm.cofrade.datosPersonales.apellido2\" type=\"text\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n\r\n          <div layout layout-sm=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>DNI</label>\r\n              <md-icon md-font-library=\"material-icons\">credit_card</md-icon>\r\n              <input ng-model=\"vm.cofrade.datosPersonales.dni\" type=\"text\" readonly>\r\n            </md-input-container>\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Sexo</label>\r\n              <md-icon md-font-library=\"material-icons\"></md-icon>\r\n               <input ng-model=\"vm.cofrade.datosPersonales.sexo\" type=\"text\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n\r\n          <div layout layout-sm=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Teléfono</label>\r\n              <md-icon md-font-library=\"material-icons\">local_phone</md-icon>\r\n              <input ng-model=\"vm.cofrade.datosPersonales.telefono\" type=\"text\" readonly>\r\n            </md-input-container>\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Email</label>\r\n              <md-icon md-font-library=\"material-icons\">email</md-icon>\r\n               <input ng-model=\"vm.cofrade.datosPersonales.email\" type=\"text\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n\r\n           <div layout layout-sm=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Fecha de nacimiento:</label>\r\n              <md-icon md-font-library=\"material-icons\">event_note</md-icon>\r\n              <input ng-model=\"vm.cofrade.datosPersonales.fechaNacimiento\" type=\"text\" readonly>\r\n            </md-input-container>\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Fecha de inscripción:</label>\r\n              <md-icon md-font-library=\"material-icons\">event_note</md-icon>\r\n              <input ng-model=\"vm.cofrade.datosPersonales.fechaInscripcion\" type=\"text\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n\r\n          <h4><md-icon md-font-library=\"material-icons\">place</md-icon>Dirección</h4>\r\n          <div layout layout-sm=\"column\">\r\n            <div offset=\"5\" flex=\"40\">\r\n              <p>{{vm.cofrade.datosPersonales.direccion.calle}}\r\n              <span ng-if=\"vm.cofrade.datosPersonales.direccion.numero\">, {{vm.cofrade.datosPersonales.direccion.numero}}</span>\r\n              <span ng-if=\"vm.cofrade.datosPersonales.direccion.planta\">, {{vm.cofrade.datosPersonales.direccion.planta}}</span>\r\n              <span ng-if=\"vm.cofrade.datosPersonales.direccion.piso\">, {{vm.cofrade.datosPersonales.direccion.piso}}</span></p>\r\n              <p>{{vm.cofrade.datosPersonales.direccion.municipio}}, {{vm.cofrade.datosPersonales.direccion.cp}}</p>\r\n              <p>{{vm.cofrade.datosPersonales.direccion.provincia}}</p>\r\n            </div>\r\n            <div offset=\"5\" flex=\"50\">\r\n              <ui-gmap-google-map center=\'vm.maps.coord\' zoom=\'vm.maps.zoom\'>\r\n                <ui-gmap-marker coords=\"vm.maps.marker\" idKey=\"1\" ></ui-gmap-marker>\r\n              </ui-gmap-google-map>\r\n            </div>\r\n          </div>\r\n\r\n          <div ng-if=\"vm.cofrade.datosPersonales.nota\" layout=\"column\">\r\n            <h4><md-icon md-font-library=\"material-icons\">insert_comment</md-icon> Nota</h4>\r\n            <div flex offset=\"5\">\r\n              <p>{{vm.cofrade.datosPersonales.nota}}</p>\r\n            </div>\r\n          </div>\r\n        </md-content>\r\n      </md-tab>\r\n      <md-tab ng-disabled=\"!vm.cofrade.datosFinancieros\">\r\n        <md-tab-label>\r\n          <md-icon md-font-library=\"material-icons\">account_balance</md-icon>\r\n        </md-tab-label>\r\n        <md-content class=\"md-padding\">\r\n          <h1>Datos bancarios</h1>\r\n          <div layout=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>IBAN</label>\r\n              <md-icon md-font-library=\"material-icons\">attach_money</md-icon>\r\n              <input ng-model=\"vm.iban\" type=\"text\" readonly>\r\n            </md-input-container>\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>CC</label>\r\n              <md-icon md-font-library=\"material-icons\"></md-icon>\r\n               <input ng-model=\"vm.cc\" type=\"text\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n          \r\n          <div layout layout-sm=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Banco</label>\r\n              <md-icon md-font-library=\"material-icons\">account_balance</md-icon>\r\n              <input ng-model=\"vm.cofrade.datosFinancieros.banco\" type=\"text\" readonly>\r\n            </md-input-container>\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Driección del banco</label>\r\n              <md-icon md-font-library=\"material-icons\"></md-icon>\r\n               <input ng-model=\"vm.cofrade.datosFinancieros.direccionBanco\" type=\"text\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n          \r\n          <div layout layout-sm=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Deudas</label>\r\n              <md-icon md-font-library=\"material-icons\">mood_bad</md-icon>\r\n              <input ng-model=\"vm.cofrade.datosFinancieros.deuda\" type=\"text\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n          \r\n          <div layout layout-sm=\"column\">\r\n            <md-checkbox flex=\"50\" aria-label=\"Domiciliar pagos\" ng-model=\"vm.cofrade.datosFinancieros.domiciliarPagos\" class=\"md-primary\" ng-disabled=\"true\">\r\n              Pagos domicilados\r\n            </md-checkbox>\r\n            <md-checkbox flex=\"40\" aria-label=\"Domiciliar loteria\" ng-model=\"vm.cofrade.datosFinancieros.domiciliarLoteria\" class=\"md-primary\" ng-disabled=\"true\">\r\n              Lotería domiciliada\r\n            </md-checkbox>\r\n          </div>\r\n\r\n        </md-content>\r\n      </md-tab>\r\n      <md-tab ng-disabled=\"!vm.cofrade.datosLoteria\">\r\n        <md-tab-label>\r\n          <md-icon md-font-library=\"material-icons\">local_play</md-icon>\r\n        </md-tab-label>\r\n        <md-content class=\"md-padding\">\r\n          <h1>Datos Loteria</h1>\r\n          <div layout layout-sm=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Número de Navidad 1</label>\r\n              <md-icon md-font-library=\"material-icons\">local_play</md-icon>\r\n              <input ng-model=\"vm.cofrade.datosLoteria.numeroNavidad1\" type=\"number\" readonly>\r\n            </md-input-container>\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Número de Navidad 2</label>\r\n              <md-icon md-font-library=\"material-icons\"></md-icon>\r\n               <input ng-model=\"vm.cofrade.datosLoteria.numeroNavidad2\" type=\"number\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n\r\n          <div layout layout-sm=\"column\">\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Número del Niño 1</label>\r\n              <md-icon md-font-library=\"material-icons\">local_play</md-icon>\r\n              <input ng-model=\"vm.cofrade.datosLoteria.numeroNinio1\" type=\"number\" readonly>\r\n            </md-input-container>\r\n            <md-input-container class=\"md-icon-float\" flex=\"50\">\r\n              <label>Número del Niño 2</label>\r\n              <md-icon md-font-library=\"material-icons\"></md-icon>\r\n               <input ng-model=\"vm.cofrade.datosLoteria.numeroNinio2\" type=\"number\" readonly>\r\n            </md-input-container>\r\n          </div>\r\n\r\n          <div layout layout-sm=\"column\">\r\n            <md-checkbox flex=\"50\" aria-label=\"Domiciliar pagos\" ng-model=\"vm.cofrade.datosLoteria.participacionNavidad\" class=\"md-primary\" ng-disabled=\"true\">\r\n              Participaciones de Navidad\r\n            </md-checkbox>\r\n            <md-checkbox flex=\"40\" aria-label=\"Domiciliar loteria\" ng-model=\"vm.cofrade.datosLoteria.participacionNinio\" class=\"md-primary\" ng-disabled=\"true\">\r\n              Participaciones del niño\r\n            </md-checkbox>\r\n          </div>\r\n          \r\n        </md-content>\r\n      </md-tab>\r\n    </md-tabs>\r\n\r\n    <!-- \r\n      \r\n\r\n      <div ng-if=\"vm.cofrade.datosFinancieros\" layout=\"column\">\r\n\r\n        \r\n      </div>\r\n      \r\n      <div ng-if=\"vm.cofrade.datosLoteria\" layout=\"column\">\r\n        <md-divider></md-divider>\r\n        \r\n\r\n      </div> -->\r\n        \r\n    </md-content>\r\n\r\n  </div>\r\n</div>");
$templateCache.put("cofrades/list/cofrades.html","<div layout=\"row\" layout-align=\"center center\" class=\"cofrades\">\r\n  <div flex flex-gt-md=\"80\">\r\n    <lista-cofrades cofrades=\"vm.cofrades\" page=\"vm.nextPage\" cofrades-bajas=\"vm.cofradesBajas\" page-bajas=\"vm.nextPageBajas\"></lista-cofrades>\r\n  </div>\r\n  <div  class=\"md-margin\">\r\n  <md-button class=\"fab-cofrade md-margin md-fab\" aria-label=\"Añadir Cofrade\" ui-sref=\"cofradesCambios\">\r\n    <md-icon md-font-library=\"material-icons\">add</md-icon>\r\n  </md-button>\r\n</div>\r\n\r\n</div>\r\n");}]);