import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreatePackagingCategory } from 'src/app/dto/APIResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class PackagingCategoryService {

  constructor( private router: Router,
    private http: HttpClient) { }

  addPackagingCategory(packagingCategoryData:any){
      return this.http.post<any>('https://korikelogistics.com:8443/api/admin/itemPackCategory?action=add', packagingCategoryData)
    }

}
