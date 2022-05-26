import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "app/interceptors/auth.interceptor";
import { DataTablesModule } from "angular-datatables";

import { ProductsComponent } from "../../pages/products/products.component";
import { ProductFilterPipe } from "app/pages/products/product-filter.pipe";
import { ProductAddComponent } from "app/pages/products/product-add/product-add.component";
import { ProductEditComponent } from "app/pages/products/product-edit/product-edit.component";

import { CategoriesComponent } from "../../pages/categories/categories.component";
import { CategoriesAddComponent } from "app/pages/categories/categories-add/categories-add.component";
import { CategoriesUpdateComponent } from "app/pages/categories/categories-update/categories-update.component";

import { ContactsComponent } from "../../pages/contacts/contacts.component";
import { ContactsAddComponent } from "app/pages/contacts/contacts-add/contacts-add.component";
import { ContactsUpdateComponent } from "app/pages/contacts/contacts-update/contacts-update.component";

import { DocumentsComponent } from "../../pages/documents/documents.component";
import { DocumentsAddComponent } from "app/pages/documents/documents-add/documents-add.component";
import { DocumentsUpdateComponent } from "app/pages/documents/documents-update/documents-update.component";

import { SlidersComponent } from "../../pages/sliders/sliders.component";
import { SlidersAddComponent } from "app/pages/sliders/sliders-add/sliders-add.component";
import { SlidersUpdateComponent } from "app/pages/sliders/sliders-update/sliders-update.component";

import { LoginComponent } from "../../pages/login/login.component";
import { MenusComponent } from "../../pages/menus/menus.component";
import { UsersComponent } from "../../pages/users/users.component";
import { HizmetlerAddComponent } from "app/pages/hizmetler/hizmetler-add/hizmetler-add.component";
import { HizmetlerComponent } from "app/pages/hizmetler/hizmetler.component";
import { HizmetlerUpdateComponent } from "app/pages/hizmetler/hizmetler-update/hizmetler-update.component";
import { HakkimizdaComponent } from "app/pages/hakkimizda/hakkimizda.component";
import { HakkimizdaAddComponent } from "app/pages/hakkimizda/hakkimizda-add/hakkimizda-add.component";
import { HakkimizdaUpdateComponent } from "app/pages/hakkimizda/hakkimizda-update/hakkimizda-update.component";

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

    HizmetlerAddComponent,
    HizmetlerComponent,
    HizmetlerUpdateComponent,

    HakkimizdaComponent,
    HakkimizdaAddComponent,
    HakkimizdaUpdateComponent,

    LoginComponent,
    UsersComponent,
    MenusComponent,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AdminLayoutModule {}
