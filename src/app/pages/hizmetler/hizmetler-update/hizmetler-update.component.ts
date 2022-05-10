import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HizmetService } from "app/services/hizmet.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "hizmetler-update",
  templateUrl: "./hizmetler-update.component.html",
  styleUrls: ["./hizmetler-update.component.scss"],
})
export class HizmetlerUpdateComponent implements OnInit {
  hizmetEditForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private hizmetlerService: HizmetService,
    private toasterService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createHizmetEditForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params["hizmetId"]) {
        this.getHizmet(params["hizmetId"]);
      }
    });
  }

  createHizmetEditForm() {
    this.hizmetEditForm = this.formBuilder.group({
      hizmetAdi: ["", Validators.required],
      hizmetResmi: ["", Validators.required],
      hizmetOzet: ["", Validators.required],
      hizmetDetay: ["", Validators.required],
    });
  }

  getHizmet(hizmetId: number) {
    this.hizmetlerService.getHizmetById(hizmetId).subscribe((response) => {
      this.hizmetEditForm = this.formBuilder.group({
        hizmetId: [response.data?.hizmetId || "", ""],
        hizmetAdi: [response.data?.hizmetAdi || "", ""],
        hizmetResmi: [response.data?.hizmetResmi || "", ""],
        hizmetOzet: [response.data?.hizmetOzet || "", ""],
        hizmetDetay: [response.data?.hizmetDetay || "", ""],
      });
    });
  }

  edit() {
    if (this.hizmetEditForm.valid) {
      let categoryModel = Object.assign({}, this.hizmetEditForm.value);
      this.hizmetlerService.editHizmet(categoryModel).subscribe(
        (response) => {
          this.router.navigate(["hizmetler"]);
          this.toasterService.success(response.message, "Hizmet Güncellemesi");
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
      this.toasterService.error("Eksik Hizmet Bilgileri.", "Uyarı");
    }
    return;
  }
}
