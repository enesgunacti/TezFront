import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryService } from "app/services/category.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "categories-add",
  templateUrl: "./categories-add.component.html",
  styleUrls: ["./categories-add.component.scss"],
})
export class CategoriesAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toasterService: ToastrService,
    private categoryService: CategoryService
  ) {}
  categoryAddForm: FormGroup;
  ngOnInit(): void {
    this.createCategoryAddForm();
  }

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      categoryName: ["", Validators.required],
    });
  }

  add() {
    if (this.categoryAddForm.valid) {
      let categoryModel = Object.assign({}, this.categoryAddForm.value);
      this.categoryService.addCategory(categoryModel).subscribe(
        (response) => {
          this.router.navigate(["categories"]);

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
