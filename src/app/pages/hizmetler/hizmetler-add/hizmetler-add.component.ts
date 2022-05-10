import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HizmetService } from "app/services/hizmet.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "hizmetler-add",
  templateUrl: "./hizmetler-add.component.html",
  styleUrls: ["./hizmetler-add.component.scss"],
})
export class HizmetlerAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toasterService: ToastrService,
    private hizmetServcie: HizmetService
  ) {}
  hizmetAddForm: FormGroup;
  ngOnInit(): void {
    this.createHizmetAddForm();
  }

  createHizmetAddForm() {
    this.hizmetAddForm = this.formBuilder.group({
      hizmetAdi: ["", Validators.required],
      hizmetResmi: ["", Validators.required],
      hizmetOzet: ["", Validators.required],
      hizmetDetay: ["", Validators.required],
    });
  }

  add() {
    if (this.hizmetAddForm.valid) {
      let hizmetModel = Object.assign({}, this.hizmetAddForm.value);
      this.hizmetServcie.addHizmet(hizmetModel).subscribe(
        (response) => {
          this.router.navigate(["hizmetler"]);

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
      this.toasterService.error("Eksik Hizmet Bilgileri.", "Uyarı");
    }
    return;
  }
}
