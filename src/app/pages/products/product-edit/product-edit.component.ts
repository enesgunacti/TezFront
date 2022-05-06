import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "app/pages/categories/category";
import { CategoryService } from "app/services/category.service";
import { ProductService } from "app/services/product.service";

import { ToastrService } from "ngx-toastr";

@Component({
  selector: "product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"],
})
export class ProductEditComponent implements OnInit {

  productEditForm: FormGroup;
  categories: Category[];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private toasterService: ToastrService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createProductEditForm();
    this.activatedRoute.params.subscribe((params)=>{
      if(params["productId"]){
        this.getProduct(params["productId"])
      }
    })
    this.getCategories()
  }

  createProductEditForm(){
    this.productEditForm = this.formBuilder.group({
      productName:["",Validators.required],
      productDescription:["",Validators.required],
      productPicture:["",Validators.required],
      categoryId:["",Validators.required],
    })
  }

  getCategories(){
    this.categoryService.getKategoriler().subscribe((response) => {
      this.categories = response.data;
    });
  }

  getProduct(productId:number){
    this.productService.getProductById(productId).subscribe(response=>{
      this.productEditForm = this.formBuilder.group({
        productId:[response.data?.productId || '', ""],
        productName:[response.data?.productName || '', ""],
        productDescription:[response.data?.productDescription || '', ""],
        productPicture:[response.data?.productPicture || '', ""],
        categoryId:[response.data?.categoryId || '', ""]
      })
    })
  }

  edit() {
    if (this.productEditForm.valid) {
      let productModel = Object.assign({}, this.productEditForm.value);
      this.productService.editProduct(productModel).subscribe(
        (response) => {
          this.router.navigate(['products']); 
          this.toasterService.success(response.message, 'Ürün Güncellemesi');
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
