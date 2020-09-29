import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, FormArray} from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  addForm:FormGroup;
  constructor(private fb:FormBuilder , private _adminService:AdminService) { }

  ngOnInit(): void {
      // this.addForm=this.fb.group({
      //     'question':[''],
      //     'option1':[''],
      //     'option2':[],
      //     'option3':[],
      //     'option4':[],
      //     'correctAns':[]
      // })

      this.addForm=this.fb.group({
         quesAnsArray:this.fb.array([])
      })

      const newQandA=this.fb.group({
        'question':[''],
        'option1':[''],
        'option2':[],
        'option3':[],
        'option4':[],
        'correctAns':Number['']
     })

      this.questionArray.push(newQandA)   //pushing one form on start
  }
  onSubmit(){
    console.log(this.addForm.value);
    this._adminService.saveAdminQuestions(this.addForm.value).subscribe(
        data => console.log("added!"),
        err => console.log(err)
    )
  }

  get questionArray(){
    return this.addForm.get('quesAnsArray') as FormArray;
  }

  newForm(){
    const newQandA=this.fb.group({
          'question':[''],
          'option1':[''],
          'option2':[],
          'option3':[],
          'option4':[],
          'correctAns':[]
    })

    this.questionArray.push(newQandA)
  }

  onFormDelete(i){
    this.questionArray.removeAt(i)
  }

}
