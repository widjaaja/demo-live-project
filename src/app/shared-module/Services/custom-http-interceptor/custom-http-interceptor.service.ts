import { Injectable } from '@angular/core';

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter, tap, catchError } from 'rxjs/operators'
import { Alert, AlertTitle, AlertType } from 'src/app/dto/Alert';

import { AccountService } from '../account.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  router: any;
  constructor(private accountService: AccountService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const user = this.accountService.userValue;
    const isLoggedIn = user && user.token;
    // const isApiUrl = request.url.startsWith(environment.apiUrl);
    const isApiUrl = true

    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }
        return next.handle(request)
        .pipe(
           catchError((err: HttpErrorResponse) => {
               console.log(err);
               
               if (err.status === 401){
                Alert.showStatus(
                  AlertType.ERROR,
                  AlertTitle.ERROR,
                  'Unauthorized User'
                );
                this.router.navigate(['login']);
              }
              else if (err.status === 405){
                Alert.showStatus(
                  AlertType.ERROR,
                  AlertTitle.ERROR,
                  'Something When Wrong'
                );
              }
              else {
                Alert.showStatus(
                  AlertType.ERROR,
                  AlertTitle.ERROR,
                  err.error.statusDetails
                );
              }
              return throwError(() => 'Session User Expired');
           })
        );
  }
    
}
