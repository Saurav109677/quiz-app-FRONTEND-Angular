import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { LoginComponent } from './login/login.component';
import { AdminGuardGuard } from './admin-guard.guard'

const routes: Routes = [
  
  {path:"admin",
    children:[
      {path:"",redirectTo:'login',pathMatch:'full'},
      {path:"dashboard",component:DashboardComponent, canActivate:[AdminGuardGuard]},
      {path:"login",component:LoginComponent }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
