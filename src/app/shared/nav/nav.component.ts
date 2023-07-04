import { Component, OnInit } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  userlogOn:boolean = false;

  constructor(private loginService:LoginService){

  }
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userlogOn)=>{
          this.userlogOn=userlogOn
        }
      }
    )
  }
}
