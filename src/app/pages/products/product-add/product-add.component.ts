import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Category } from "app/pages/categories/category";
import { CategoryService } from "app/services/category.service";
import { ProductService } from "app/services/product.service";
import { ToastrService } from "ngx-toastr";
import { Product } from "../product";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
  providers: [CategoryService,ProductService],
})
export class ProductAddComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,private categoryService: CategoryService,private productService:ProductService,private toasterService:ToastrService,private router:Router,) {}
  product: Product = new Product();
  categories: Category[];
  productAddForm:FormGroup;
  
  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      productDescription:["",Validators.required],
      productPicture:["",Validators.required],
      categoryId:["",Validators.required],
    })
  }

  ngOnInit() {
    this.createProductAddForm();
    this.getCategories();
  }
  
  getCategories(){
    this.categoryService.getKategoriler().subscribe((response) => {
      this.categories = response.data;
    });
  }

  
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.addProduct(productModel).subscribe(
        (response) => {
          this.router.navigate(['products']);
          
          this.toasterService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toasterService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      )
    } 
    else {
      this.toasterService.error('Eksik Ürün Bilgileri.', 'Uyarı');
    }
    return;
  }


  
  
}
