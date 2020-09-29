import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvas/canvasjs.min';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  constructor(private _shared:SharedService) { }
  score:any
  ngOnInit() {

    this.getResult()
    

      }


      getResult(){
        let correct=0,i=0;
         this._shared.userAns.forEach(element => {
           
            let found;
              this._shared.getQuesAnsById(element.questId).subscribe(
                data=>{
                  found=data;
                  if(found.correctAns===element.userAnswer)
                      correct++
                      i++;
                  if(i==this._shared.userAns.length){
                      this.score={
                        "correct":correct,
                        "incorrect":this._shared.userAns.length-correct
                      }
                      this.generatePie()
                  }

                    
                }
       
              )      
         });
      }

      generatePie(){
              
            let chart = new CanvasJS.Chart("chartContainer", {
              theme: "light2",
              animationEnabled: true,
              exportEnabled: true,
              title:{
                //text: "Result!"
              },
              data: [{
                type: "doughnut",
                showInLegend: true,
                toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
                indexLabel: "{name} - #percent%",
                dataPoints: [
                  { y: this.score.correct, name: "Correct" },
                  { y: this.score.incorrect, name: "Incorrect" },
                ]
              }]
            });
              
            chart.render();

      }
}
