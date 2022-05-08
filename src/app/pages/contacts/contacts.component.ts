import { Component, OnInit } from "@angular/core";
import { ContactService } from "app/services/contact.service";
import { ToastrService } from "ngx-toastr";
import { Contact } from "./contact";

@Component({
  moduleId: module.id,
  selector: "contacts-cmp",
  templateUrl: "contacts.component.html",
})
export class ContactsComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private toasterService: ToastrService
  ) {}
  contacts: Contact[];
  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe((response) => {
      this.contacts = response.data;
    });
  }

  delete(id: number) {
    if (confirm("Silmek istediğinize emin misiniz ?")) {
      this.contactService.deleteCategory(id).subscribe((response) => {
        this.ngOnInit();
        this.toasterService.success(response.message, "Silme İşlemi");
      });
    }
  }
}
