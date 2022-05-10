import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ContactService } from "app/services/contact.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "contacts-update",
  templateUrl: "./contacts-update.component.html",
  styleUrls: ["./contacts-update.component.scss"],
})
export class ContactsUpdateComponent implements OnInit {
  contactEditForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private toasterService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createContactEditForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params["contactId"]) {
        this.getContact(params["contactId"]);
      }
    });
  }

  createContactEditForm() {
    this.contactEditForm = this.formBuilder.group({
      contactName: ["", Validators.required],
      contactDetail: ["", Validators.required],
    });
  }

  getContact(contactId: number) {
    this.contactService.getContactById(contactId).subscribe((response) => {
      this.contactEditForm = this.formBuilder.group({
        contactId: [response.data?.contactId || "", ""],
        contactName: [response.data?.contactName || "", ""],
        contactDetail: [response.data?.contactDetail || "", ""],
      });
    });
  }

  edit() {
    if (this.contactEditForm.valid) {
      let contactModel = Object.assign({}, this.contactEditForm.value);
      this.contactService.editContact(contactModel).subscribe(
        (response) => {
          this.router.navigate(["contacts"]);
          this.toasterService.success(
            response.message,
            "İletişim Güncellemesi"
          );
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toasterService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                "Doğrulama hatası"
              );
            }
          }
        }
      );
    } else {
      this.toasterService.error("Eksik İletişim Bilgileri.", "Uyarı");
    }
    return;
  }
}
