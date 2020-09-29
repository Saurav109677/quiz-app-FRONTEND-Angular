import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl="http://localhost:9000"
  cred:any
  constructor(private http:HttpClient) { }

  saveAdminQuestions(questions){
    return this.http.post(this.baseUrl+"/adminAllQuest",questions)
  }

  getQuestions(){
    return this.http.get(this.baseUrl+'/adminQuest')
  }

  updateQuestion(updatedValue){
    return this.http.patch(this.baseUrl+"/adminQuest/"+updatedValue._id,updatedValue)
  }

  deleteQuestion(id){
    return this.http.delete(this.baseUrl+"/adminQuest/"+id)
  }

  isAdminRights():boolean{
      if(this.cred.userName === 'abc' && this.cred.password==='abc')
        return true
      else  
        return false;

  }
}
