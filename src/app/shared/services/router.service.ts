/**
 * @Author: Deepesh Dang
 * @Date:   14/03/2019
 * @Email:  
 * @Filename: settings.service.ts
 * @Last modified by:   Deepesh Dang
 * @Last modified time: 14/03/2019 9:30PM
 */

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

// import { BehaviorSubject } from 'rxjs';
import { BehaviorSubject, Subject, Subscription, Observable } from 'rxjs';

import * as moment from 'moment';
import { resolve } from 'dns';



@Injectable({
  providedIn: 'root'
})
export class RouterService {
    private prev_route: string[] = [];

    constructor(private router: Router){

    }




 /**
     * Wrapper for Angular Router navigate method
     * @param path Path to navigate
     * @param query Query parameter to add to the route
     */
    public navigate(path: string | string[], query?: { [name: string]: any }) {
        let path_list = [];
        if (path instanceof Array) {
            path_list = path_list.concat(path);
        } else {
            path_list.push(path);
        }
        this.prev_route.push(this.router.url);
        // if (!this.systems.resources.authLoaded) {
        this.router.navigate(path_list, { queryParams: query });
        // } else {
        // this.router.navigate([path]);
        // }
    }

      /**
     * Return to the previous page
     */
    public back() {
        if (this.prev_route.length > 0) {
            this.navigate(this.prev_route.pop());
            this.prev_route.pop();
        } else {
            this.navigate('');
        }
    }
  
}




 