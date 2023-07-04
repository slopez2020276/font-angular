import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError= "";
  loginForm=this.formBuilder.group({
    email:['grupo@grupo.com',[Validators.required,Validators.email]],
    password:['',Validators.required],
  })

  constructor( private formBuilder : FormBuilder, private router: Router, private logininService: LoginService){

  }

  ngOnInit(){

  }

  login(){
    if(this.loginForm.valid){
      this.logininService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.log(errorData);
          this.loginError = errorData;
        },
        complete: () => {
          console.log("Login completed");
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
        }
      });
     
    }else{
      this.loginForm.markAllAsTouched();
      alert("error al ingresar los datos")
      
    }
  }

}