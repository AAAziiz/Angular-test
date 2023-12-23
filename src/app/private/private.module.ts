import { PrivateRoutingModule } from './private-routing.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceAccueilComponent } from './components/interface-accueil/interface-accueil.component';
import { WhoWeAre1Component } from './components/who-we-are1/who-we-are1.component';
import { WhoWeAre2Component } from './components/who-we-are2/who-we-are2.component';



@NgModule({
  declarations: [
    InterfaceAccueilComponent,
    WhoWeAre1Component,
    WhoWeAre2Component
  ],
  imports: [
    CommonModule,PrivateRoutingModule
  ],
})
export class PrivateModule { }
