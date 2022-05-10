import { Component, OnInit } from "@angular/core";
import { HizmetService } from "app/services/hizmet.service";
import { ToastrService } from "ngx-toastr";
import { Hizmet } from "./hizmet";

@Component({
  selector: "hizmetler",
  templateUrl: "./hizmetler.component.html",
  styleUrls: ["./hizmetler.component.scss"],
})
export class HizmetlerComponent implements OnInit {
  constructor(
    private hizmetService: HizmetService,
    private toasterService: ToastrService
  ) {}

  hizmetler: Hizmet[];
  ngOnInit(): void {
    this.getHizmetler();
  }

  getHizmetler() {
    this.hizmetService.getHizmetler().subscribe((response) => {
      this.hizmetler = response.data;
    });
  }

  delete(id: number) {
    if (confirm("Silmek istediğinize emin misiniz ?")) {
      this.hizmetService.deleteHizmet(id).subscribe((response) => {
        this.ngOnInit();
        this.toasterService.success(response.message, "Silme İşlemi");
      });
    }
  }
}
