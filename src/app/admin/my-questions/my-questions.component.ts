import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { BsModalRef , BsModalService } from 'ngx-bootstrap/modal'
import { UpdateQuestionComponent } from '../update-question/update-question.component';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css']
})
export class MyQuestionsComponent implements OnInit {
  myQuestions:any

  modalQ:any;
  bsModalRef:BsModalRef
  constructor(private _adminService:AdminService , private modalService:BsModalService) { }

  ngOnInit(): void {
   this.getQuestion()
   
  } 

  getQuestion(){
      this._adminService.getQuestions().subscribe(
        data =>{
          this.myQuestions=data
           console.log(this.myQuestions);
           
        },
        error => console.log(error)
        
      )
  }

  openModalWithComponent(ques){
    console.log(ques);
    
    const initialState={
      list:[
        ques
      ]
    }
    this.bsModalRef=this.modalService.show(UpdateQuestionComponent,{initialState})
    // this.bsModalRef.content.closeBtnName='Close'
  
  }

  deleteQuest(id){
    console.log("delete fired!");
    
    this._adminService.deleteQuestion(id).subscribe(
      data=> {
         this.getQuestion()
      },
      error=>console.log("ERROR"+error)
    )
    
  }

}
