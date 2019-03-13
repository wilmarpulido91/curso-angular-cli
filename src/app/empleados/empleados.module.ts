import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [{
  path: '',
  component: EmpleadosComponent
}];

@NgModule({
  declarations: [EmpleadosComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class EmpleadosModule {}