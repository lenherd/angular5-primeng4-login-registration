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
var index_1 = require("../_services/index");
var carservice_1 = require("../../app/_services/carservice");
/* import { Users } from 'primeng/components/domain/car'; */
//form loads for dialogue box
var router_1 = require("@angular/router");
var index_2 = require("../_services/index");
var HomeComponent = /** @class */ (function () {
    /*
         //drag-drop users
         availableUser: Users[];
         selectedUser: Users[];
         draggedUser: Users;
     */
    function HomeComponent(userService, carService, router, alertService) {
        this.userService = userService;
        this.carService = carService;
        this.router = router;
        this.alertService = alertService;
        this.users = [];
        //form loads for dialogue box
        this.loading = false;
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllUsers();
        this.selectedCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.availableCars = cars; });
        /* this.selectedUser = [];
        this.carService.getCarsMedium().then(userss => this.availableUser = userss); */
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    HomeComponent.prototype.dragStart = function (event, car) {
        this.draggedCar = car;
        //this.draggedUser = user;
    };
    HomeComponent.prototype.drop = function (event) {
        if (this.draggedCar) {
            var draggedCarIndex_1 = this.findIndex(this.draggedCar);
            this.selectedCars = this.selectedCars.concat([this.draggedCar]);
            this.availableCars = this.availableCars.filter(function (val, i) { return i != draggedCarIndex_1; });
            this.draggedCar = null;
        }
        /*  if(this.draggedUser) {
             let draggedUserIndex = this.findIndex(this.draggedUser);
             this.selectedUser = [...this.selectedUser, this.draggedUser];
             this.availableUser = this.availableUser.filter((val,i) => i!=draggedUserIndex);
             this.draggedUser = null;
         } */
    };
    HomeComponent.prototype.dragEnd = function (event) {
        this.draggedCar = null;
        //this.draggedUser = null;
    };
    HomeComponent.prototype.findIndex = function (car) {
        var index = -1;
        for (var i = 0; i < this.availableCars.length; i++) {
            if (car.vin === this.availableCars[i].vin) {
                index = i;
                break;
            }
        }
        /* for(let i = 0; i < this.availableUser.length; i++) {
            if(user.username === this.availableUser[i].username) {
                index = i;
                break;
            }
        } */
        return index;
    };
    HomeComponent.prototype.editDetails = function () {
        // this.selectedCar = car;
        this.displayDialog = true;
    };
    HomeComponent.prototype.onDialogHide = function () {
        //this.draggedCar = null;
    };
    HomeComponent.prototype.register = function (id) {
        var _this = this;
        this.loading = true;
        this.userService.update(id)
            .subscribe(function (data) {
            _this.alertService.success('Password Changed, try logging in with that password', true);
            _this.router.navigate(['']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    HomeComponent.prototype.register2 = function (id) {
        var _this = this;
        this.loading = true;
        this.userService.reorder(id)
            .subscribe(function (data) {
            _this.alertService.success('Roles Reordered', true);
            _this.router.navigate(['']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html',
            styles: ["\n    .ui-grid li {\n        list-style-type: none;\n        padding: 10px;\n        margin-bottom: 5px;\n    }\n"]
        }),
        __metadata("design:paramtypes", [index_1.UserService,
            carservice_1.CarService,
            router_1.Router,
            index_2.AlertService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map