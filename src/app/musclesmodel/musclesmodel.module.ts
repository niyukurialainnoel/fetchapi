import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HeaderComponent } from '../header/header/header.component';
import { musclesComponent } from '../musclesmodel/muscles/muscles.component';



@NgModule({
  declarations: [
    musclesComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class MusclesmodelModule { }
