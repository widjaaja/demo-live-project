import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEditBilling } from 'src/app/dto/APIResponseDTO';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor( private router: Router,
    private http: HttpClient) { }

    addBilling(billingData:any){
      return this.http.post<any>(`${environment.apiBaseUrl}api/common/billingModel?action=add`, billingData);
    }

    getBilling(searchData:any){
      return this.http.post<any>(`${environment.apiBaseUrl}api/common/billingModel?action=query`, {filters: searchData});
    }

    editBilling(billingData:CreateEditBilling,bill_id:number){
      return this.http.post<any>(`${environment.apiBaseUrl}api/common/billingModel/${bill_id}?action=edit`, billingData);
    }
  
}
