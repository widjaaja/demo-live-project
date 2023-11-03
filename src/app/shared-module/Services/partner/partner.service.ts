import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http:HttpClient) { }

  getAllPartner(filterUrl?:string){
    return this.http.get<any>(`${environment.apiBaseUrl}api/partners/${filterUrl}`);
  }

  addAllPartner(data: any){
    return this.http.post<any>(`${environment.apiBaseUrl}api/partners?action=new`, data);
  }

  editPartnerByPartnerID(data: any){
    return this.http.post<any>(`${environment.apiBaseUrl}api/partners?action=edit`, data);
  };

  uploadImage(data: FormData){
    return this.http.post<any>(`${environment.apiBaseUrl}api/upload`, data);
  }

}
