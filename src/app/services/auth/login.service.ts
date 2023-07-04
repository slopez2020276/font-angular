import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url = 'http://localhost:3001/api'
        currentUserLoginOn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
        currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({_id:'', email:''})

  constructor( private http: HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
     return this.http.get<User>('././assets/data.json').pipe(
       catchError(this.handleError)
       ,tap( (userData: User) => {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
       }),
       catchError(this.handleError)
     );
  }

  private handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.error("se produjo un error", error.error)
    }else{
      console.error('Backend devolvio el siguiente codio de error', error.status, error.error );
    }
    return throwError(()=>Error('Algo fallo, intentelo de nuevo'))
  }
  get userData():Observable<User>{
    return this.currentUserData.asObservable();
  } 
  get longinOn ():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
}

 