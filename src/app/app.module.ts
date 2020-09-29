import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownModule } from 'ngx-countdown';
import { BattleFieldComponent } from './battle-field/battle-field.component';
import { HomeComponent } from './home/home.component';
import { ScoresComponent } from './scores/scores.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddQuestionsComponent } from './admin/add-questions/add-questions.component';
import { AdminModule } from './admin/admin.module';
import { NotFoundComponent } from './not-found/not-found.component'
import { MyQuestionsComponent } from './admin/my-questions/my-questions.component';
import { AdminService } from './admin/admin.service';
import { HttpClientModule} from '@angular/common/http';
import { UpdateQuestionComponent } from './admin/update-question/update-question.component'
import { BsModalRef, BsModalService , ModalModule} from 'ngx-bootstrap/modal'
import {SharedService} from './shared.service'
import { LoginComponent } from './admin/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    BattleFieldComponent,
    HomeComponent,
    ScoresComponent,
    DashboardComponent,
    AddQuestionsComponent,
    MyQuestionsComponent,
    NotFoundComponent,
    LoginComponent,
    UpdateQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CountdownModule,
    AdminModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AdminService,BsModalRef,SharedService],
  entryComponents:[UpdateQuestionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
