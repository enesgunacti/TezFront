import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Category } from 'app/pages/categories/category';
import { ListResponseModel } from 'app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  path = "https://localhost:44336/api/Categories/getall"
  
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.path);
  }

  getKategoriler(): Observable<ListResponseModel<Category>> {
    return this.http.get<ListResponseModel<Category>>(this.path);
  }
}
