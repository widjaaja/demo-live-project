import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateSuperCategory } from 'src/app/dto/APIResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class SuperCategoryService {

  constructor( private router: Router,
    private http: HttpClient) { }

  addSuperCategory(superCategoryData:any){
      return this.http.post<any>('https://korikelogistics.com:8443/api/admin/superCategory?action=add', superCategoryData)
    }
}
