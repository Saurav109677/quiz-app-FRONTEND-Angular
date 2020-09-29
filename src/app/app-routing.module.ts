import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BattleFieldComponent } from './battle-field/battle-field.component';
import { ScoresComponent } from './scores/scores.component';
import { NotFoundComponent } from './not-found/not-found.component';




const routes: Routes = [
  {path:"", redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"battleField",component:BattleFieldComponent},
  {path:"scores",component:ScoresComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
