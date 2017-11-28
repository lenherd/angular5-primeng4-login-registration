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
require("rxjs/add/operator/toPromise");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
/* import { Users } from 'primeng/components/domain/car'; */
var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getCarsSmall = function () {
        return this.http.get('assets/showcase/data/cars-small.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    /* getCarsMedium() {
      //JSON.parse(localStorage.getItem('users'));
    return this.http.get<any>('/api/users/')
      .toPromise()
      .then(res => <Users[]>res.JSON.parse(localStorage.getItem('users')))
      .then(data => { return data; });
    } */
    CarService.prototype.getCarsLarge = function () {
        return this.http.get('assets/showcase/data/cars-large.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    CarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=carservice.js.map