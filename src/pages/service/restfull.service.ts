import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()

export class RestfullService {
  
    constructor(private _http:Http) {
         
    }
  
    getObjeto(funcion) {
        // url: es la ruta de la api a la que se desea conectar
        let url = 'https://jsonplaceholder.typicode.com/'+ funcion;

        // res: es la variable que devolvera una respuesta en formato json
        let res = this._http.get(url, { headers: this.getHeaders() })
                            .map(res => res.json());
        return res ;
    }

    
    // getHeaders(): es una funcion que agrega gran cantidad de header al momento
    // de hacer una peticion AJAX por HTTP para conectarse a una API
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
