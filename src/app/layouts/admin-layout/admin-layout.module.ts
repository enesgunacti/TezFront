import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
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
import { CategoriesAddComponent } from "app/pages/categories/categories-add/categories-add.component";
import { CategoriesUpdateComponent } from "app/pages/categories/categories-update/categories-update.component";
import { ContactsAddComponent } from "app/pages/contacts/contacts-add/contacts-add.component";
import { ContactsUpdateComponent } from "app/pages/contacts/contacts-update/contacts-update.component";
import { SlidersAddComponent } from "app/pages/sliders/sliders-add/sliders-add.component";
import { SlidersUpdateComponent } from "app/pages/sliders/sliders-update/sliders-update.component";
import { DocumentsAddComponent } from "app/pages/documents/documents-add/documents-add.component";
import { DocumentsUpdateComponent } from "app/pages/documents/documents-update/documents-update.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
  ],
  declarations: [
    CategoriesComponent,
    CategoriesAddComponent,
    CategoriesUpdateComponent,

    ContactsComponent,
    ContactsAddComponent,
    ContactsUpdateComponent,

    DocumentsComponent,
    DocumentsAddComponent,
    DocumentsUpdateComponent,

    SlidersComponent,
    SlidersAddComponent,
    SlidersUpdateComponent,

    ProductsComponent,
    ProductFilterPipe,
    ProductAddComponent,
    ProductEditComponent,

    LoginComponent,
    UsersComponent,
    MenusComponent,
    UserComponent,
    TableComponent,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AdminLayoutModule {}
