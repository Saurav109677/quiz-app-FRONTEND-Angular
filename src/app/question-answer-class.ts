export class QuestionAnswerClass {
    quesId:string;
    question:String;
    option1:String;
    option2:String;
    option3:String;
    option4:String;

    constructor(id,q,opt1,opt2,opt3,opt4){
        this.quesId=id;
        this.question=q;
        this.option1=opt1
        this.option2=opt2
        this.option3=opt3
        this.option4=opt4
    }
  
}

export class UserAnswers{
    questId:any;
    userAnswer:string;
    constructor(q,u){
        this.questId=q;
        this.userAnswer=u;
    }
}