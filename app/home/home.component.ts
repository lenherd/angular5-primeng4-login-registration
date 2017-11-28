import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

//primengimport
import {MenuItem} from 'primeng/components/common/api';
import { HttpModule} from '@angular/http'
import { HttpClientModule} from '@angular/common/http'
//drag-drp
import {Car} from 'primeng/components/domain/car';
import {CarService} from '../../app/_services/carservice';
/* import { Users } from 'primeng/components/domain/car'; */

 //form loads for dialogue box
import { Router } from '@angular/router';
import { AlertService} from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styles: [`
    .ui-grid li {
        list-style-type: none;
        padding: 10px;
        margin-bottom: 5px;
    }
`]
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

     //drag-drop
     availableCars: Car[];
     selectedCars: Car[];
     draggedCar: Car;

     //dialogue box
     displayDialog: boolean;

     //form loads for dialogue box
     loading = false;
     model: any = {};
/* 
     //drag-drop users
     availableUser: Users[];
     selectedUser: Users[];
     draggedUser: Users;
 */
    constructor(private userService: UserService,
        private carService: CarService, 
         private router: Router,
         private alertService: AlertService)
          {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.selectedCars = [];
        this.carService.getCarsSmall().then(cars => this.availableCars = cars);
        /* this.selectedUser = [];
        this.carService.getCarsMedium().then(userss => this.availableUser = userss); */
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    dragStart(event:any,car:Car) {
     this.draggedCar = car; 
     //this.draggedUser = user;
    }
    
    drop(event:any) {
       if(this.draggedCar) {
            let draggedCarIndex = this.findIndex(this.draggedCar);
            this.selectedCars = [...this.selectedCars, this.draggedCar];
            this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);
            this.draggedCar = null;
        }
       /*  if(this.draggedUser) {
            let draggedUserIndex = this.findIndex(this.draggedUser);
            this.selectedUser = [...this.selectedUser, this.draggedUser];
            this.availableUser = this.availableUser.filter((val,i) => i!=draggedUserIndex);
            this.draggedUser = null;
        } */
    }
    
    dragEnd(event:any) {
       this.draggedCar = null;
       //this.draggedUser = null;
    }
    
    findIndex(car: Car) {
        let index = -1;
        for(let i = 0; i < this.availableCars.length; i++) {
            if(car.vin === this.availableCars[i].vin) {
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
    }

    editDetails() {
       // this.selectedCar = car;
       this.displayDialog = true;
    }

    onDialogHide() {
        //this.draggedCar = null;
    }

    register(id: number) {
        this.loading = true;
        this.userService.update(id)
            .subscribe(
                data => {
                    this.alertService.success('Password Changed, try logging in with that password', true);
                    this.router.navigate(['']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    register2(id: number) {
        this.loading = true;
        this.userService.reorder(id)
            .subscribe(
                data => {
                    this.alertService.success('Roles Reordered', true);
                    this.router.navigate(['']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}