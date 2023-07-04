import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginComponent1 } from './vistas/login/login.component';


const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: 'login',component:},
  {path: 'iniciar-sesion',component:LoginComponent},	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
