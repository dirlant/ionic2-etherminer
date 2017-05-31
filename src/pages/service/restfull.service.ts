import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()

export class RestfullService {
  
    constructor(private _http:Http) {
         
    }
  
    getObjeto(funcion) {
  
        let url = 'https://jsonplaceholder.typicode.com/'+ funcion;
        let res = this._http.get(url, { headers: this.getHeaders() })
                            .map(res => res.json());
        return res ;
    }

    
    private getHeaders() {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
        headers.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");

        return headers;
    }    

}
