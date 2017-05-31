import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtherMinerComponent } from './ether-miner';

@NgModule({
  declarations: [
    EtherMinerComponent,
  ],
  imports: [
    IonicPageModule.forChild(EtherMinerComponent),
  ],
  exports: [
    EtherMinerComponent
  ]
})
export class EtherMinerComponentModule {}
