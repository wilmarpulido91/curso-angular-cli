import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutaComponent } from './fruta.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [{
  path: '',
  component: FrutaComponent
}];

@NgModule({
  declarations: [FrutaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class FrutaModule {}