import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SliderService } from "app/services/slider.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "sliders-update",
  templateUrl: "./sliders-update.component.html",
  styleUrls: ["./sliders-update.component.scss"],
})
export class SlidersUpdateComponent implements OnInit {
  sliderEditForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private sliderService: SliderService,
    private toasterService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createSliderEditForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params["sliderId"]) {
        this.getSlider(params["sliderId"]);
      }
    });
  }

  createSliderEditForm() {
    this.sliderEditForm = this.formBuilder.group({
      sliderPicture: ["", Validators.required],
    });
  }

  getSlider(sliderId: number) {
    this.sliderService.getSliderById(sliderId).subscribe((response) => {
      this.sliderEditForm = this.formBuilder.group({
        sliderId: [response.data?.sliderId || "", ""],
        sliderPicture: [response.data?.sliderPicture || "", ""],
      });
    });
  }

  edit() {
    if (this.sliderEditForm.valid) {
      let sliderModel = Object.assign({}, this.sliderEditForm.value);
      this.sliderService.editSlider(sliderModel).subscribe(
        (response) => {
          this.router.navigate(["sliders"]);
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
      this.toasterService.error("Eksik Ürün Bilgileri.", "Uyarı");
    }
    return;
  }
}
