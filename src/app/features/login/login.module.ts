import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogoComponent } from './logo/logo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogoComponent,
    CarouselComponent,
    LoginFormComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
