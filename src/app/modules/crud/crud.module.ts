import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './pages/crud/crud.component';
import { AddEditDialogComponent } from './components/add-edit-dialog/add-edit-dialog.component';
import { materialModules } from 'src/app/core/constants/material';



@NgModule({
  declarations: [
    CrudComponent,
    AddEditDialogComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ...materialModules
  ]
})
export class CrudModule { }
