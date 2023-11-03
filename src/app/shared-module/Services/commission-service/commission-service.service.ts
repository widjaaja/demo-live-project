import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CommissionServiceService {

  constructor(private http: HttpClient) { }

  queryCommission(partner_id:string){
    return this.http.post<any>(`${environment.apiBaseUrl}api/admin/commission?action=query`, partner_id);
  }

  createCommission(commissionData:any){
    return this.http.post<any>(`${environment.apiBaseUrl}api/admin/commission?action=add`, commissionData);
  }

  updateCommission(commissionID:number,commissionData:any){
    return this.http.post<any>(`${environment.apiBaseUrl}api/admin/commission/${commissionID}?action=edit`, commissionData);
  }
}
