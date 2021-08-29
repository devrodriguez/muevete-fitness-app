import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgottenPage } from './forgotten.page';
import { ForgottenPageRoutingModule } from './forgotten-routing.module';

const routes: Routes = [
  {
    path: '',
    component: ForgottenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgottenPageRoutingModule
  ],
  declarations: [ForgottenPage]
})
export class ForgottenPageModule {}
