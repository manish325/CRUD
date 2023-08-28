import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'crud'
  },
  {
    path : 'crud',
    loadChildren : ()=>import('./crud/crud.module').then(m=>m.CrudModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }