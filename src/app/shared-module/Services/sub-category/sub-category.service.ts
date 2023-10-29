import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateSubCategory } from 'src/app/dto/APIResponseDTO';
import { API_ADMIN_BASE } from 'src/app/dto/constants';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor( private router: Router,
    private http: HttpClient) { }

  addSubCategory(subCategoryData:any){
      return this.http.post<any>('https://korikelogistics.com:8443/api/admin/subCategory?action=add', subCategoryData)
    }
  getCategoryList(){
    return this.http.post<any>(API_ADMIN_BASE+'category?action=query',{'filter':{}});
  }
}
