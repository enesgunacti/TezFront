import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ListResponseModel } from "app/models/listResponseModel";
import { ResponseModel } from "app/models/responseModel";
import { SingleResponseModel } from "app/models/singleResponseModel";
import { Belge } from "app/pages/documents/document";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DoucmentService {
  constructor(private http: HttpClient) {}
  apiUrl = "https://localhost:44336/api/Documents";

  getDocuments(): Observable<ListResponseModel<Belge>> {
    return this.http.get<ListResponseModel<Belge>>(this.apiUrl + "/getall");
  }

  addDocument(document: Belge): Observable<any> {
    return this.http.post<ResponseModel>(this.apiUrl + "/add", document);
  }

  deleteDocument(documentId: number): Observable<SingleResponseModel<Belge>> {
    const url = `${this.apiUrl}/${documentId}`;
    return this.http.delete<SingleResponseModel<Belge>>(url);
  }

  getDocumentById(documentId: number): Observable<SingleResponseModel<Belge>> {
    return this.http.get<SingleResponseModel<Belge>>(
      this.apiUrl + "/getbyid?documentId=" + documentId
    );
  }

  editDocument(document: Belge): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + "/update", document);
  }
}
