import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toasterService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.creatLoginForm();
  }
  creatLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response =>{
        this.toasterService.info(response.message)
        localStorage.setItem("token",response.data.token)        
      } ,responseError=>{
        // console.log(responseError)
        this.toasterService.error(responseError.error)
      })
    }
  }
  goToPage(pageName:string):void{
    if(this.authService.isAuthanticated() == true)  
    this.router.navigate(['${pageName}']);  
  }

}
