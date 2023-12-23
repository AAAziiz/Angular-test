import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceAccueilComponent } from './components/interface-accueil/interface-accueil.component';
import { WhoWeAre1Component } from './components/who-we-are1/who-we-are1.component';
import { WhoWeAre2Component } from './components/who-we-are2/who-we-are2.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: InterfaceAccueilComponent,
  },
  {
    path: 'who1',
    component: WhoWeAre1Component,
  },
  {
    path: 'who2',
    component: WhoWeAre2Component,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
