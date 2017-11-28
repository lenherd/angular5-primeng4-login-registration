import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from 'primeng/components/domain/car';
/* import { Users } from 'primeng/components/domain/car'; */

@Injectable()
export class CarService {

    constructor(private http: HttpClient) { }

    getCarsSmall() {
    return this.http.get<any>('assets/showcase/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }

    /* getCarsMedium() {
      //JSON.parse(localStorage.getItem('users'));
    return this.http.get<any>('/api/users/')
      .toPromise()
      .then(res => <Users[]>res.JSON.parse(localStorage.getItem('users')))
      .then(data => { return data; });
    } */

    getCarsLarge() {
    return this.http.get<any>('assets/showcase/data/cars-large.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }
}