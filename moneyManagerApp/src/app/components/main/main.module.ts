import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ]
})
export class MainModule { }
