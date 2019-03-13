import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  declarations: [HomeComponent],
  imports: [ 
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class HomeModule {}