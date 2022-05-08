import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ListResponseModel } from "app/models/listResponseModel";
import { ResponseModel } from "app/models/responseModel";
import { SingleResponseModel } from "app/models/singleResponseModel";
import { Contact } from "app/pages/contacts/contact";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private http: HttpClient) {}

  apiUrl = "https://localhost:44336/api/Contacts";

  getContacts(): Observable<ListResponseModel<Contact>> {
    return this.http.get<ListResponseModel<Contact>>(this.apiUrl + "/getall");
  }

  addContact(contact: Contact): Observable<any> {
    return this.http.post<ResponseModel>(this.apiUrl + "/add", contact);
  }

  deleteCategory(contactId: number): Observable<SingleResponseModel<Contact>> {
    const url = `${this.apiUrl}/${contactId}`;
    return this.http.delete<SingleResponseModel<Contact>>(url);
  }

  getContactById(contactId: number): Observable<SingleResponseModel<Contact>> {
    return this.http.get<SingleResponseModel<Contact>>(
      this.apiUrl + "/getbyid?contactId=" + contactId
    );
  }

  editContact(contact: Contact): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + "/update", contact);
  }
}
