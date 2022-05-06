import { Routes } from "@angular/router";

import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";

import { ProductsComponent } from "../../pages/products/products.component";
import { CategoriesComponent } from "../../pages/categories/categories.component";
import { UsersComponent } from "../../pages/users/users.component";
import { ContactsComponent } from "../../pages/contacts/contacts.component";
import { DocumentsComponent } from "../../pages/documents/documents.component";
import { MenusComponent } from "../../pages/menus/menus.component";
import { SlidersComponent } from "../../pages/sliders/sliders.component";
import { LoginComponent } from "app/pages/login/login.component";
import { LoginGuard } from "app/guards/login.guard";


import { ProductAddComponent } from "app/pages/products/product-add/product-add.component";
import { ProductEditComponent } from "app/pages/products/product-edit/product-edit.component";



export const AdminLayoutRoutes: Routes = [

  { path: "user", component: UserComponent },
  { path: "table", component: TableComponent },

 
  { path: "categories", component: CategoriesComponent},
  { path: "users", component: UsersComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "documents", component: DocumentsComponent },
  { path: "menus", component: MenusComponent },
  { path: "sliders", component: SlidersComponent },
  { path: "login", component: LoginComponent },


  { path: "products", component: ProductsComponent , canActivate:[LoginGuard]}, // en son tüm componentler için kullanılması gerekiyor....//
  { path:'product-add', component:ProductAddComponent},
  { path:'product/:productId/guncelle', component:ProductEditComponent}



];
