import { Injectable } from '@angular/core';

import { ApiBaseService } from '../base/base-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class AccountService extends ApiBaseService {
  
    public login(
      request: any,
      onSuccess: (data: any) => void,
      onError: (errMessage: string) => void,
      onComplete: () => void
    ) {
      return this.post(
        `authUser`,
        request,
        onSuccess,
        onError,
        onComplete
      );
    }

    public generateToken(
        request: any,
        onSuccess: (data: any) => void,
        onError: (errMessage: string) => void,
        onComplete: () => void
      ) {
        return this.post(
          `authUser/generateToken`,
          request,
          onSuccess,
          onError,
          onComplete
        );
      }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }

    // generateToken(userName:string,oneTimePass:string):Observable<AuthOTPGeneration>{

    // return this.http.post<AuthOTPGeneration>(`${environment.apiBaseUrl}authUser/generateToken`,
    //     { userName, oneTimePass }) .pipe(map(user => {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('user', JSON.stringify(user));
    //     this.userSubject.next(user);
    //     return user;
    // }));
    // }

}