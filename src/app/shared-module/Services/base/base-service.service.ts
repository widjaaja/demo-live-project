import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
// import { ApiResponse, Errors } from '../../models/integration/api-response';
// import { StorageService } from '../base/storage.service';
// import { APP_SETTING } from 'src/app/app-setting/Constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  constructor(
    protected httpClient: HttpClient,
    // protected storageService: StorageService,
    protected router: Router
  ) { }

  protected get(
    url: string,
    onSuccess: (data: any) => void,
    onError: (errMessage: string) => void,
    onComplete: () => void
  ) {
    this.httpClient
      .get<any>(`${environment.apiBaseUrl}${url}`, this.buildHttpsHeaders())
      .subscribe({
        next: (resp: any) => {
          const obj: any = resp;
          onSuccess(obj);
        },
        error: err => {
          onError(err.message);
          onComplete();
        },
        complete: () => {
          onComplete();
        }
      });
  }

  protected post(
    url: string,
    param: any,
    onSuccess: (data: any) => void,
    onError: (errMessage: string) => void,
    onComplete: () => void
  ) {
    this.httpClient
      .post<any>(`${environment.apiBaseUrl}${url}`, param, this.buildHttpsHeaders())
      .subscribe({
        next: (resp: any) => {
          const obj: any = resp;
          onSuccess(obj);
          
        },
        error: err => {
          onError(err.statusDetails);
          onComplete();
        },
        complete: () => {
          onComplete();
        }
      });
  }

  private buildHttpsHeaders(isJson: boolean = true): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if (isJson) {
      httpOptions.headers = new HttpHeaders()
        .set('Content-Type', 'application/json');
    } else {
      httpOptions.headers = new HttpHeaders();
    }
    return httpOptions;
  }

}
