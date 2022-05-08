import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SliderService } from "app/services/slider.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "sliders-add",
  templateUrl: "./sliders-add.component.html",
  styleUrls: ["./sliders-add.component.scss"],
})
export class SlidersAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toasterService: ToastrService,
    private sliderService: SliderService
  ) {}
  sliderAddForm: FormGroup;
  ngOnInit(): void {
    this.createSliderAddForm();
  }

  createSliderAddForm() {
    this.sliderAddForm = this.formBuilder.group({
      sliderPicture: ["", Validators.required],
    });
  }

  add() {
    if (this.sliderAddForm.valid) {
      let sliderModel = Object.assign({}, this.sliderAddForm.value);
      this.sliderService.addSlider(sliderModel).subscribe(
        (response) => {
          this.router.navigate(["sliders"]);

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
