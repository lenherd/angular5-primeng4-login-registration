"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var document_service_1 = require("./service/document.service");
var SectionComponent = /** @class */ (function () {
    function SectionComponent(docService) {
        this.docService = docService;
    }
    SectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deletedDocs = [];
        this.docService.getDocuments().subscribe(function (docs) { return _this.availableDocs = docs; });
    };
    SectionComponent.prototype.dragStart = function (event, doc) {
        this.draggedDoc = doc;
    };
    SectionComponent.prototype.drop = function (event) {
        var _this = this;
        if (this.draggedDoc) {
            // add draggable element to the deleted documents list 
            this.deletedDocs = this.deletedDocs.concat([this.draggedDoc]);
            // remove draggable element from the available documents list
            this.availableDocs = this.availableDocs.filter(function (e) { return e.id !== _this.draggedDoc.id; });
            this.draggedDoc = null;
        }
    };
    SectionComponent.prototype.dragEnd = function (event) {
        this.draggedDoc = null;
    };
    SectionComponent = __decorate([
        core_1.Component({
            selector: 'section',
            templateUrl: 'app/section/section.component.html'
        })
        //primengclass
        ,
        __metadata("design:paramtypes", [document_service_1.DocumentService])
    ], SectionComponent);
    return SectionComponent;
}());
exports.SectionComponent = SectionComponent;
//# sourceMappingURL=section.component.js.map