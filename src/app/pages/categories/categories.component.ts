import { Component, OnInit } from "@angular/core";
import { CategoryService } from "app/services/category.service";
import { ToastrService } from "ngx-toastr";
import { Category } from "./category";

@Component({
  moduleId: module.id,
  selector: "categories-cmp",
  templateUrl: "categories.component.html",
  providers: [CategoryService],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private toasterService: ToastrService
  ) {}

  categories: Category[];

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getKategoriler().subscribe((response) => {
      this.categories = response.data;
    });
  }

  delete(id: number) {
    if (confirm("Silmek istediğinize emin misiniz ?")) {
      this.categoryService.deleteCategory(id).subscribe((response) => {
        this.ngOnInit();
        this.toasterService.success(response.message, "Silme İşlemi");
      });
    }
  }
}
