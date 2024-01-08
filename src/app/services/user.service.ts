import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../shared/models/user';
import { Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>;

  constructor(private http:HttpClient) { 
    this.userObservable = this.userSubject.asObservable();
  }

  // login(userLogin:IUserLogin):Observable<User>{
  //      this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
  //       tap({
  //         next: (user) =>{

  //         },
  //         error: (errorResponse) =>{
            
  //         }
  //       })
  //      );
  // }
}
