import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Category } from "app/pages/categories/category";
import { ListResponseModel } from "app/models/listResponseModel";
import { ResponseModel } from "app/models/responseModel";
import { SingleResponseModel } from "app/models/singleResponseModel";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  path = "https://localhost:44336/api/Categories/getall";
  apiUrl = "https://localhost:44336/api/Categories";

  getKategoriler(): Observable<ListResponseModel<Category>> {
    return this.http.get<ListResponseModel<Category>>(this.path);
  }

  addCategory(category: Category): Observable<any> {
    return this.http.post<ResponseModel>(this.apiUrl + "/add", category);
  }

  deleteCategory(
    categoryId: number
  ): Observable<SingleResponseModel<Category>> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.delete<SingleResponseModel<Category>>(url);
  }

  getCategoryById(
    categoryId: number
  ): Observable<SingleResponseModel<Category>> {
    return this.http.get<SingleResponseModel<Category>>(
      this.apiUrl + "/getbyid?categoryId=" + categoryId
    );
  }

  editCategory(category: Category): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + "/update", category);
  }
}
