import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DoucmentService } from "app/services/doucment.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "documents-add",
  templateUrl: "./documents-add.component.html",
  styleUrls: ["./documents-add.component.scss"],
})
export class DocumentsAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toasterService: ToastrService,
    private documentService: DoucmentService
  ) {}

  documentAddForm: FormGroup;

  ngOnInit(): void {
    this.createDocumentAddForm();
  }

  createDocumentAddForm() {
    this.documentAddForm = this.formBuilder.group({
      documentName: ["", Validators.required],
    });
  }

  add() {
    if (this.documentAddForm.valid) {
      let categoryModel = Object.assign({}, this.documentAddForm.value);
      this.documentService.addDocument(categoryModel).subscribe(
        (response) => {
          this.router.navigate(["documents"]);

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
