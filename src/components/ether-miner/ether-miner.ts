import { Component } from '@angular/core';

/**
 * Generated class for the EtherMinerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ether-miner',
  templateUrl: 'ether-miner.html'
})
export class EtherMinerComponent {

  text: string;

  constructor() {
    console.log('Hello EtherMinerComponent Component');
    this.text = 'Hello World';
  }

}
