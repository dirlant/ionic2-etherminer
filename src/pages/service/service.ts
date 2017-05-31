import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class ServicePage {
  
    constructor(private http:Http) {
         
    }
  
    ethPool(address: any) {
        var url = 'http://ethpool.org/api/miner_new/' + encodeURI(address);
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}
