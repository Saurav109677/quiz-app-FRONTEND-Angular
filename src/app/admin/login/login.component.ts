import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router,private _adminService:AdminService) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      userName:['',Validators.required],
      password:['']
    })
  }

  onSubmit(){
    this._adminService.cred=this.loginForm.value
    this.router.navigate(['admin/dashboard']) 
  }

}
