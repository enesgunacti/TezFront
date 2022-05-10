import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ListResponseModel } from "app/models/listResponseModel";
import { ResponseModel } from "app/models/responseModel";
import { SingleResponseModel } from "app/models/singleResponseModel";
import { Hizmet } from "app/pages/hizmetler/hizmet";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HizmetService {
  constructor(private http: HttpClient) {}
  apiUrl = "https://localhost:44336/api/Hizmetler";

  getHizmetler(): Observable<ListResponseModel<Hizmet>> {
    return this.http.get<ListResponseModel<Hizmet>>(this.apiUrl + "/getall");
  }

  addHizmet(contact: Hizmet): Observable<any> {
    return this.http.post<ResponseModel>(this.apiUrl + "/add", contact);
  }

  deleteHizmet(hizmetId: number): Observable<SingleResponseModel<Hizmet>> {
    const url = `${this.apiUrl}/${hizmetId}`;
    return this.http.delete<SingleResponseModel<Hizmet>>(url);
  }

  getHizmetById(hizmetId: number): Observable<SingleResponseModel<Hizmet>> {
    return this.http.get<SingleResponseModel<Hizmet>>(
      this.apiUrl + "/getbyid?hizmetId=" + hizmetId
    );
  }

  editHizmet(contact: Hizmet): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + "/update", contact);
  }
}
