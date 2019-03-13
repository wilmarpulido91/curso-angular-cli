import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componente principal
import { AdminComponent } from './admin/admin.component';

const appRoutes:Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'empleados',
        loadChildren: './empleados/empleados.module#EmpleadosModule'
      },
      {
        path: 'fruta',
        loadChildren: './fruta/fruta.module#FrutaModule'
      }
    ]
  },
  {path: '**', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}