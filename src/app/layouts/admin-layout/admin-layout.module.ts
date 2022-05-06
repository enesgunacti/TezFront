import { NgModule } from "@angular/core";
import {RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";

import { ProductsComponent } from "../../pages/products/products.component";
import { CategoriesComponent } from "../../pages/categories/categories.component";
import { UsersComponent } from "../../pages/users/users.component";
import { ContactsComponent } from "../../pages/contacts/contacts.component";
import { DocumentsComponent } from "../../pages/documents/documents.component";
import { MenusComponent } from "../../pages/menus/menus.component";
import { SlidersComponent } from "../../pages/sliders/sliders.component";
import { LoginComponent } from "../../pages/login/login.component";
import { ProductFilterPipe } from "app/pages/products/product-filter.pipe";
import { ProductAddComponent } from "app/pages/products/product-add/product-add.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "app/interceptors/auth.interceptor";
import { DataTablesModule } from "angular-datatables";
import { ProductEditComponent } from "app/pages/products/product-edit/product-edit.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
    
  ],
  declarations: [
    UserComponent,
    TableComponent,
    ProductsComponent,
    CategoriesComponent,
    UsersComponent,
    ContactsComponent,
    DocumentsComponent,
    MenusComponent,
    SlidersComponent,
    LoginComponent,
    ProductFilterPipe,
    ProductAddComponent,
    ProductEditComponent
    
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AdminLayoutModule {}
