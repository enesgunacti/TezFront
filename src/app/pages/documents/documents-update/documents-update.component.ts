import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DoucmentService } from "app/services/doucment.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "documents-update",
  templateUrl: "./documents-update.component.html",
  styleUrls: ["./documents-update.component.scss"],
})
export class DocumentsUpdateComponent implements OnInit {
  documentEditForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private documentService: DoucmentService,
    private toasterService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createDocumentEditForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params["documentId"]) {
        this.getDocument(params["documentId"]);
      }
    });
  }

  createDocumentEditForm() {
    this.documentEditForm = this.formBuilder.group({
      documentName: ["", Validators.required],
    });
  }

  getDocument(documentId: number) {
    this.documentService.getDocumentById(documentId).subscribe((response) => {
      this.documentEditForm = this.formBuilder.group({
        documentId: [response.data?.documentId || "", ""],
        documentName: [response.data?.documentName || "", ""],
      });
    });
  }

  edit() {
    if (this.documentEditForm.valid) {
      let documentModel = Object.assign({}, this.documentEditForm.value);
      this.documentService.editDocument(documentModel).subscribe(
        (response) => {
          this.router.navigate(["documents"]);
          this.toasterService.success(
            response.message,
            "Kategori Güncellemesi"
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
      this.toasterService.error("Eksik Ürün Bilgileri.", "Uyarı");
    }
    return;
  }
}
