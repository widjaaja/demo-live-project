import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEditPromo } from 'src/app/dto/APIResponseDTO';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(   private router: Router,
    private http: HttpClient) { }
     
    addService(data:any){
      return this.http.post<any>(`${environment.apiBaseUrl}api/admin/service?action=add`, data)
    }

    getListService(){
      return this.http.post<any>(`${environment.apiBaseUrl}api/consumer/services`, {})
    }

    editService(data: any, id:number){
      return this.http.post<any>(`${environment.apiBaseUrl}/api/admin/service/${id}?action=edit`, data)
    }
}
