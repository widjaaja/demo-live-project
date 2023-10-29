import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { COMMISSION_API_BASE } from 'src/app/dto/constants';

@Injectable({
  providedIn: 'root'
})
export class CommissionServiceService {

  constructor(private http: HttpClient) { }

  queryCommission(partner_id:string){
   return this.http.post<any>(COMMISSION_API_BASE+'?action=query',partner_id);
  }

  createCommission(commissionData:any){
    return this.http.post<any>(COMMISSION_API_BASE+'?action=add',commissionData);
  }

  updateCommission(commissionID:number,commissionData:any){
    return this.http.post<any>(COMMISSION_API_BASE+"/"+commissionID+'?action=edit',commissionData);
  }
}
