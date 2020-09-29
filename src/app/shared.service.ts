import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //PORT= process.env.PORT
  baseUrl="http://localhost:9000"
  allQuesWithAns:any
  userAns:any
  constructor(private _http:HttpClient) { }

  getQuestions(){
    return this._http.get(this.baseUrl+"/adminQuest")
  }

 

  getQuesAnsById(id){
    return this._http.get(this.baseUrl+"/adminQuest/"+id)
  }
}
