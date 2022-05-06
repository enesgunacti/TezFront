import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'app/services/category.service';
import { Category } from './category';


@Component({
    moduleId: module.id,
    selector: 'categories-cmp',
    templateUrl: 'categories.component.html',
    providers:[CategoryService]
})
export class CategoriesComponent implements OnInit{

    constructor(private categoryService:CategoryService){}

    
    categories:Category[];
    
    ngOnInit() {
       this.getCategories();
    }

    getCategories(){
        this.categoryService.getKategoriler().subscribe((response) => {
          this.categories = response.data;
        });
      }
}