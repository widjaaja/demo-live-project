import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AuthOTPGeneration, LoginResponse } from 'src/app/dto/APIResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject!: BehaviorSubject<AuthOTPGeneration | null>;
    public user!: Observable<AuthOTPGeneration | null>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
       this.user = this.userSubject.asObservable(); 
  }

  public get userValue() {
    return this.userSubject.value;
}

  authUser(userName: string, authType: number):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}authUser`, { userName, authType: 5 })
  }

  login(userName:string,oneTimePass:string):Observable<AuthOTPGeneration>{

    return this.http.post<AuthOTPGeneration>(`${environment.apiBaseUrl}authUser/generateToken`,
     { userName, oneTimePass }) .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
  }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
}

}
