import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

userLogOn: boolean = false;
userData?: User
  constructor(private loginService: LoginService){

  }

  ngOnInit(): void { 
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLogOn)=> {
        this.userLogOn= userLogOn
      }
    })
    this.loginService.currentUserData.subscribe({
      next:(userData)=> {
        this.userData= userData
      }
    })
  }

}
