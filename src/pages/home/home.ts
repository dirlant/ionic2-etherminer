import { RestfullService } from './../service/restfull.service';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html', 
  providers:[
    RestfullService
  ]
})
export class HomePage {

  public respuestaJson: any;

  constructor(
    public navCtrl: NavController,
    private _restfullService: RestfullService
    
  ) {

  }

  
  

  ionViewDidLoad() {
      
    this._restfullService.getObjeto('posts').subscribe(
      data => {
          this.respuestaJson = data; 
          console.log(this.respuestaJson);
      },
      err => {
          //console.log(err);
      },
      () => console.log('Hubo un error')
    );
  }

}
