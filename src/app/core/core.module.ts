import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';


@NgModule({
  declarations: [
   ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    AuthRoutingModule

  ]
})
export class CoreModule { }
