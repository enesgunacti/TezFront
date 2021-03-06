import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductService } from "app/services/product.service";
import { Product } from "./product";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  moduleId: module.id,
  selector: "products-cmp",
  templateUrl: "products.component.html",
  providers: [ProductService],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private toasterService: ToastrService
  ) {}

  products: Product[];
  filterText = "";

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getÜrünler().subscribe((response) => {
      this.products = response.data;
    });
  }

  delete(id: number) {
    if (confirm("Silmek istediğinize emin misiniz ?")) {
      this.productService.deleteProduct(id).subscribe((response) => {
        this.ngOnInit();
        this.toasterService.success(response.message, "Silme İşlemi");
      });
    }
  }
}
