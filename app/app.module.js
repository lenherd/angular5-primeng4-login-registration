"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
// used to create fake backend
var index_1 = require("./_helpers/index");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_2 = require("./_directives/index");
var index_3 = require("./_guards/index");
var index_4 = require("./_services/index");
var index_5 = require("./home/index");
var index_6 = require("./login/index");
var index_7 = require("./register/index");
// import needed PrimeNG modules here for input and button
var button_1 = require("primeng/components/button/button");
var inputtext_1 = require("primeng/components/inputtext/inputtext");
var section_component_1 = require("./section/section.component");
//primeng for tab
var tabmenu_1 = require("primeng/components/tabmenu/tabmenu");
var tabview_1 = require("primeng/components/tabview/tabview");
var codehighlighter_1 = require("primeng/components/codehighlighter/codehighlighter");
//drg-drop
var dragdrop_1 = require("primeng/components/dragdrop/dragdrop");
var datatable_1 = require("primeng/components/datatable/datatable");
var datagrid_1 = require("primeng/components/datagrid/datagrid");
var panel_1 = require("primeng/components/panel/panel");
//imp imports
var document_service_1 = require("./section/service/document.service");
var carservice_1 = require("../app/_services/carservice");
//big reason for error
var http_3 = require("@angular/common/http");
//diagloue module
var dialog_1 = require("primeng/components/dialog/dialog");
//production mode
var core_2 = require("@angular/core");
core_2.enableProdMode();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                //input for button and input
                button_1.ButtonModule,
                inputtext_1.InputTextModule,
                //tabmodule imports
                tabmenu_1.TabMenuModule,
                tabview_1.TabViewModule,
                codehighlighter_1.CodeHighlighterModule,
                //drag-drop
                dragdrop_1.DragDropModule,
                datatable_1.DataTableModule,
                datagrid_1.DataGridModule,
                panel_1.PanelModule,
                animations_1.BrowserAnimationsModule,
                //biggest reason for error
                http_3.HttpClientModule,
                //dialogue
                dialog_1.DialogModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.AlertComponent,
                index_5.HomeComponent,
                index_6.LoginComponent,
                index_7.RegisterComponent,
                section_component_1.SectionComponent
            ],
            providers: [
                index_3.AuthGuard,
                index_4.AlertService,
                index_4.AuthenticationService,
                index_4.UserService,
                // providers used to create fake backend
                index_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions,
                //drag-drop
                document_service_1.DocumentService,
                carservice_1.CarService,
                //biggest reason for error
                http_3.HttpClientModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map