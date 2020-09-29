import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CountdownComponent } from 'ngx-countdown';
import { QuestionAnswerClass, UserAnswers } from '../question-answer-class';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.css']
})
export class BattleFieldComponent implements OnInit {
  title = 'quiz-app-angular';
  showOptions:boolean = false;
  questTemplateForm:FormGroup;    //admin
  oneQuestForm:FormGroup;
  qAndAns:any
  loadQ:any;
  indexQ:number=0;
  lastIndex:boolean=false;
  firstIndex:boolean;
  answersArrayFromUser:any=[]
  @ViewChild('cd', { static: false })  countdown: CountdownComponent;
 

  constructor(private fb:FormBuilder,private router:Router , private _shared:SharedService){}

  ngOnInit(): void {
    
    this.populateData()
      
          this.firstIndex=true;
          this.oneQuestForm=this.fb.group({
            questionId:[''],
            userAnswer:['']
          })
     
  }

            
            toggleOptions(){
              if(this.showOptions === true)
                  this.showOptions=false
              else  
                  this.showOptions=true
          }

          populateData(){
            
            this._shared.getQuestions().subscribe(
              data=> {
               // debugger;
                    this.qAndAns=data
                    console.log(this.qAndAns);
                    //initialiszing with index 0
                      this.oneQuestForm.patchValue({
                        questionId:this.qAndAns[0]._id
                      })
                      this.loadQ=this.qAndAns[0]

                     
              },
              error=>console.log(error)
              
            )
            
            
          }

          nextQ(){
            //debugger;

          //      //inserting the answer of pervious into answerArray
          //      this.answersArrayFromUser.push(new UserAnswers(this.loadQ.quesId,this.oneQuestForm.get('userAnswer').value))
          //      console.log(this.answersArrayFromUser);    
          //  //
          this.insertAnswer(this.loadQ._id,this.oneQuestForm.get('userAnswer').value)
          //this.insertAnswer(this.loadQ.quesId,this.oneQuestForm.get('userAnswer').value)

            this.oneQuestForm.patchValue({      // to reset the radio button
              'userAnswer':""
            })

          
            this.indexQ++;
            this.findAndSetEnteredValue(this.qAndAns[this.indexQ]._id)   // to check if it is alreay been answered
            this.loadQ=this.qAndAns[this.indexQ] 
            if(this.indexQ===this.qAndAns.length-1)
              this.lastIndex=true
            else  
              this.lastIndex=false;

            if(this.indexQ===0)
              this.firstIndex=true
            else  
              this.firstIndex=false;
          }

          previousQ(){
            this.insertAnswer(this.loadQ._id,this.oneQuestForm.get('userAnswer').value)
            this.indexQ--;
            
            this.loadQ=this.qAndAns[this.indexQ]     //loadQ is loading the question and not answers
            
            this.findAndSetEnteredValue(this.qAndAns[this.indexQ]._id)   // to check if it is alreay been answered

            if(this.indexQ===this.qAndAns.length-1)
              this.lastIndex=true
              else  
              this.lastIndex=false;

              if(this.indexQ===0)
              this.firstIndex=true
              else  
                this.firstIndex=false;
                
                
          }

          findAndSetEnteredValue(questionId){
            // debugger;
            let alreadyAns=this.answersArrayFromUser.filter((e:UserAnswers) =>{
              return e.questId === questionId
            })
            
            if(alreadyAns.length === 0)
            this.setUserAnswer=""
            else
              this.setUserAnswer=alreadyAns[0].userAnswer
              
          }

          set setUserAnswer(ans:String){
            this.oneQuestForm.patchValue({
                'userAnswer':ans
            })
          }

          insertAnswer(qId,uAns){
              
            let newAnswer= new UserAnswers(qId,uAns)
          let qFound=this.answersArrayFromUser.filter((e:UserAnswers) =>{
            return e.questId === qId
            })

            
            let indexFound=this.answersArrayFromUser.indexOf(qFound[0])
            

            if(indexFound === -1)
              this.answersArrayFromUser.push(newAnswer)
            else{
              this.answersArrayFromUser[indexFound]=newAnswer
            } 

            console.log(this.answersArrayFromUser);
            
          }

          onEventFire(event){
            if(event.action === "done")
            {
               this.onSubmitAns()
            }
            
            if(event.action === "notify")
              alert('2 min remeaing')
              
          }

          // @HostListener('resume') finished(){
          //   console.log("fininshed");
            
          // }

          onSubmitAns(){
        
            this.insertAnswer(this.loadQ._id,this.oneQuestForm.get('userAnswer').value)
            this._shared.userAns=this.answersArrayFromUser
            this._shared.allQuesWithAns=this.qAndAns
            //this.countdown.stop();
            this.router.navigate(['/scores']) 
            
          }

}
