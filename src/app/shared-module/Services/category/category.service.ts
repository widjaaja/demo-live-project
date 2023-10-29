import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateCategory } from 'src/app/dto/APIResponseDTO';
import { API_ADMIN_BASE } from 'src/app/dto/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private router: Router,
    private http: HttpClient) { }
    
    addCategory(categoryData:any){
      return this.http.post<any>(API_ADMIN_BASE+'category?action=add', categoryData)
    }

    getSuperCategoryList(){
      return this.http.post<any>(API_ADMIN_BASE+'superCategory?action=query',{'filter':{}});
    }
}
