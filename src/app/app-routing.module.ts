import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'auth',
    //guards
    loadChildren:()=> import('./core/auth/auth.module').then(m=> m.AuthModule),
  },
  {
    path:'dashboard',
    //guards
    loadChildren:()=> import('./core/dashboard/dashboard.module').then(m=> m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
