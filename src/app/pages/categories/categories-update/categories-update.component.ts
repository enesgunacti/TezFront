import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "app/services/category.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "categories-update",
  templateUrl: "./categories-update.component.html",
  styleUrls: ["./categories-update.component.scss"],
})
export class CategoriesUpdateComponent implements OnInit {
  categoryEditForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private toasterService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createHizmetEditForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params["categoryId"]) {
        this.getCategory(params["categoryId"]);
      }
    });
  }

  createHizmetEditForm() {
    this.categoryEditForm = this.formBuilder.group({
      categoryName: ["", Validators.required],
    });
  }

  getCategory(categoryId: number) {
    this.categoryService.getCategoryById(categoryId).subscribe((response) => {
      this.categoryEditForm = this.formBuilder.group({
        categoryId: [response.data?.categoryId || "", ""],
        categoryName: [response.data?.categoryName || "", ""],
      });
    });
  }

  edit() {
    if (this.categoryEditForm.valid) {
      let categoryModel = Object.assign({}, this.categoryEditForm.value);
      this.categoryService.editCategory(categoryModel).subscribe(
        (response) => {
          this.router.navigate(["categories"]);
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
      this.toasterService.error("Eksik Kategori Bilgileri.", "Uyarı");
    }
    return;
  }
}
