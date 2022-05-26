import { Routes } from "@angular/router";

import { UsersComponent } from "../../pages/users/users.component";
import { MenusComponent } from "../../pages/menus/menus.component";
import { LoginComponent } from "app/pages/login/login.component";
import { LoginGuard } from "app/guards/login.guard";

import { ProductsComponent } from "../../pages/products/products.component";
import { ProductAddComponent } from "app/pages/products/product-add/product-add.component";
import { ProductEditComponent } from "app/pages/products/product-edit/product-edit.component";

import { CategoriesComponent } from "../../pages/categories/categories.component";
import { CategoriesAddComponent } from "app/pages/categories/categories-add/categories-add.component";
import { CategoriesUpdateComponent } from "app/pages/categories/categories-update/categories-update.component";

import { ContactsAddComponent } from "app/pages/contacts/contacts-add/contacts-add.component";
import { ContactsUpdateComponent } from "app/pages/contacts/contacts-update/contacts-update.component";
import { ContactsComponent } from "../../pages/contacts/contacts.component";

import { SlidersComponent } from "../../pages/sliders/sliders.component";
import { SlidersAddComponent } from "app/pages/sliders/sliders-add/sliders-add.component";
import { SlidersUpdateComponent } from "app/pages/sliders/sliders-update/sliders-update.component";

import { DocumentsComponent } from "../../pages/documents/documents.component";
import { DocumentsAddComponent } from "app/pages/documents/documents-add/documents-add.component";
import { DocumentsUpdateComponent } from "app/pages/documents/documents-update/documents-update.component";

import { HizmetlerComponent } from "app/pages/hizmetler/hizmetler.component";
import { HizmetlerAddComponent } from "app/pages/hizmetler/hizmetler-add/hizmetler-add.component";
import { HizmetlerUpdateComponent } from "app/pages/hizmetler/hizmetler-update/hizmetler-update.component";

import { HakkimizdaComponent } from "app/pages/hakkimizda/hakkimizda.component";
import { HakkimizdaAddComponent } from "app/pages/hakkimizda/hakkimizda-add/hakkimizda-add.component";
import { HakkimizdaUpdateComponent } from "app/pages/hakkimizda/hakkimizda-update/hakkimizda-update.component";

export const AdminLayoutRoutes: Routes = [
  {
    path: "categories",
    component: CategoriesComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "categories-add",
    component: CategoriesAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "category/:categoryId/guncelle",
    component: CategoriesUpdateComponent,
    canActivate: [LoginGuard],
  },

  {
    path: "hizmetler",
    component: HizmetlerComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "hizmetler-add",
    component: HizmetlerAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "hizmet/:hizmetId/guncelle",
    component: HizmetlerUpdateComponent,
    canActivate: [LoginGuard],
  },

  {
    path: "hakkimizda",
    component: HakkimizdaComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "hakkimizda-add",
    component: HakkimizdaAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "hakkimizda/:hakkimizdaId/guncelle",
    component: HakkimizdaUpdateComponent,
    canActivate: [LoginGuard],
  },

  { path: "contacts", component: ContactsComponent, canActivate: [LoginGuard] },
  {
    path: "contacts-add",
    component: ContactsAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "contact/:contactId/guncelle",
    component: ContactsUpdateComponent,
    canActivate: [LoginGuard],
  },

  {
    path: "documents",
    component: DocumentsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "documents-add",
    component: DocumentsAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "document/:documentId/guncelle",
    component: DocumentsUpdateComponent,
    canActivate: [LoginGuard],
  },

  { path: "sliders", component: SlidersComponent, canActivate: [LoginGuard] },
  {
    path: "sliders-add",
    component: SlidersAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "slider/:sliderId/guncelle",
    component: SlidersUpdateComponent,
    canActivate: [LoginGuard],
  },

  { path: "products", component: ProductsComponent, canActivate: [LoginGuard] },
  {
    path: "product-add",
    component: ProductAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "product/:productId/guncelle",
    component: ProductEditComponent,
    canActivate: [LoginGuard],
  },

  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "menus", component: MenusComponent, canActivate: [LoginGuard] },
  { path: "users", component: UsersComponent, canActivate: [LoginGuard] },
];
