import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { musclesComponent } from './musclesmodel/muscles/muscles.component';
import {ApidataService} from './services/apidata.service';
//import { HeaderComponent } from './header/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MusclesmodelModule } from './musclesmodel/musclesmodel.module';
import { MyInterceptorInterceptor } from './interceptors/my-interceptor.interceptor';

const appRoutes:Routes=[
  {path:'musclesmodel/muscles/listmuscles',component:musclesComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MusclesmodelModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor, multi: true },
    ApidataService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
