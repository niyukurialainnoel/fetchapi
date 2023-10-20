import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListmusclesComponent } from './muscles/listmuscles/listmuscles.component';
import {ApidataService} from './services/apidata.service';
import { HeaderComponent } from './header/header/header.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:'muscles/listmuscles',component:ListmusclesComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListmusclesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApidataService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
