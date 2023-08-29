import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './pages/crud/crud.component';
import { AddEditDialogComponent } from './components/add-edit-dialog/add-edit-dialog.component';
import { materialModules } from 'src/app/core/constants/material';
import { DataGridComponent } from 'src/app/shared/data-grid/data-grid.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    CrudComponent,
    AddEditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ...materialModules,
    DataGridComponent
  ]
})
export class CrudModule { }
