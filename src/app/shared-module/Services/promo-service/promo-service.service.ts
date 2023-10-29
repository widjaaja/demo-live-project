import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEditPromo } from 'src/app/dto/APIResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class PromoServiceService {

  constructor(   private router: Router,
    private http: HttpClient) { }
     
    addPromo(promoData:any){
      return this.http.post<any>('https://korikelogistics.com:8443/api/admin/promo?action=add', promoData)
    }

    getPromo(searchData:any){
      return this.http.post<any>('https://korikelogistics.com:8443/api/admin/promo?action=query',{filters: searchData})
    }

    editPromo(promoData:CreateEditPromo,promo_id:number){
      return this.http.post<any>('https://korikelogistics.com:8443/api/admin/promo/'+promo_id+'?action=edit', promoData)
    }


}
