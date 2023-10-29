import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE, COMMISSION_API_BASE } from 'src/app/dto/constants';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http:HttpClient) { }

  getAllPartner(filterUrl?:string){
    return this.http.get<any>(API_BASE+'partners'+filterUrl);
  }

  editPartnerByPartnerID(partner_details:any){
    return this.http.post<any>(API_BASE+'partner/?action=edit',{partner_details},{headers : {
     
    }
  });
  }

  uploadImage(formData:FormData){
    return this.http.post<any>(API_BASE+'upload',formData);
  }

}
