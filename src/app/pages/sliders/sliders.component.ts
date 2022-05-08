import { Component, OnInit } from "@angular/core";
import { SliderService } from "app/services/slider.service";
import { ToastrService } from "ngx-toastr";
import { Slider } from "./slider";

@Component({
  moduleId: module.id,
  selector: "sliders-cmp",
  templateUrl: "sliders.component.html",
})
export class SlidersComponent implements OnInit {
  constructor(
    private sliderService: SliderService,
    private toasterService: ToastrService
  ) {}
  sliders: Slider[];

  ngOnInit() {
    this.getSliders();
  }

  getSliders() {
    this.sliderService.getSliders().subscribe((response) => {
      this.sliders = response.data;
    });
  }

  delete(id: number) {
    if (confirm("Silmek istediğinize emin misiniz ?")) {
      this.sliderService.deleteSlider(id).subscribe((response) => {
        this.ngOnInit();
        this.toasterService.success(response.message, "Silme İşlemi");
      });
    }
  }
}
