import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { materialModules } from '../core/constants/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ...materialModules
  ]
})
export class ModulesModule { }
