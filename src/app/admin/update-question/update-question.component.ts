import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  list:any[]=[]
  updateForm:FormGroup
  showModal:boolean=true;
  constructor(private fb:FormBuilder ,
      private _adminService:AdminService ,
         private router:Router,
           private modalService:BsModalService) { }

  ngOnInit(): void {
    this.updateForm=this.fb.group({
      '_id':[this.list[0]._id],
      'question':[this.list[0].question],
        'option1':[this.list[0].option1],
        'option2':[this.list[0].option2],
        'option3':[this.list[0].option3],
        'option4':[this.list[0].option4],
        'correctAns':[this.list[0].correctAns]
    })
  }

  onSubmit(){
     console.log(this.updateForm);
     this._adminService.updateQuestion(this.updateForm.value).subscribe(
       data=>console.log('success'),
       error => console.log(error)
       
       
     )
    
  }

  closeModal(){
 
    this.modalService.hide(1)
    this.showModal=false;
  }
}
