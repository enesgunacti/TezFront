import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Product } from "app/pages/products/product";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ResponseModel } from "app/models/responseModel";
import { SingleResponseModel } from "app/models/singleResponseModel";
import { ListResponseModel } from "app/models/listResponseModel";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}
  apiUrl = "https://localhost:44336/api/Products";
  path = "https://localhost:44336/api/Products/getall";
  pathDelete = "https://localhost:44336/api/Products";

  getÜrünler(): Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.path);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<ResponseModel>(this.apiUrl + "/add", product);
  }

  deleteProduct(productId: number): Observable<SingleResponseModel<Product>> {
    const url = `${this.pathDelete}/${productId}`;
    return this.http.delete<SingleResponseModel<Product>>(url);
  }

  getProductById(productId: number): Observable<SingleResponseModel<Product>> {
    return this.http.get<SingleResponseModel<Product>>(
      this.apiUrl + "/getbyid?productId=" + productId
    );
  }

  editProduct(product: Product): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + "/update", product);
  }
}
