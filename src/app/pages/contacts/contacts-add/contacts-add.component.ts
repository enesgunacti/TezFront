import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ContactService } from "app/services/contact.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "contacts-add",
  templateUrl: "./contacts-add.component.html",
  styleUrls: ["./contacts-add.component.scss"],
})
export class ContactsAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toasterService: ToastrService,
    private contactService: ContactService
  ) {}
  contactAddForm: FormGroup;
  ngOnInit(): void {
    this.createContactAddForm();
  }

  createContactAddForm() {
    this.contactAddForm = this.formBuilder.group({
      contactName: ["", Validators.required],
      contactDetail: ["", Validators.required],
    });
  }
  add() {
    if (this.contactAddForm.valid) {
      let categoryModel = Object.assign({}, this.contactAddForm.value);
      this.contactService.addContact(categoryModel).subscribe(
        (response) => {
          this.router.navigate(["contacts"]);

          this.toasterService.success(response.message, "Başarılı");
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
      this.toasterService.error("Eksik Ürün Bilgileri.", "Uyarı");
    }
    return;
  }
}
