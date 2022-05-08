import { Routes } from "@angular/router";

import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";

import { UsersComponent } from "../../pages/users/users.component";
import { ContactsComponent } from "../../pages/contacts/contacts.component";
import { DocumentsComponent } from "../../pages/documents/documents.component";
import { MenusComponent } from "../../pages/menus/menus.component";
import { SlidersComponent } from "../../pages/sliders/sliders.component";
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
import { SlidersAddComponent } from "app/pages/sliders/sliders-add/sliders-add.component";
import { SlidersUpdateComponent } from "app/pages/sliders/sliders-update/sliders-update.component";
import { DocumentsAddComponent } from "app/pages/documents/documents-add/documents-add.component";
import { DocumentsUpdateComponent } from "app/pages/documents/documents-update/documents-update.component";

export const AdminLayoutRoutes: Routes = [
  { path: "user", component: UserComponent },
  { path: "table", component: TableComponent },

  { path: "categories", component: CategoriesComponent },
  { path: "categories-add", component: CategoriesAddComponent },
  {
    path: "category/:categoryId/guncelle",
    component: CategoriesUpdateComponent,
  },

  { path: "users", component: UsersComponent },

  { path: "contacts", component: ContactsComponent },
  { path: "contacts-add", component: ContactsAddComponent },
  {
    path: "contact/:contactId/guncelle",
    component: ContactsUpdateComponent,
  },

  { path: "documents", component: DocumentsComponent },
  { path: "documents-add", component: DocumentsAddComponent },
  {
    path: "document/:documentId/guncelle",
    component: DocumentsUpdateComponent,
  },

  { path: "menus", component: MenusComponent },

  { path: "sliders", component: SlidersComponent },
  { path: "sliders-add", component: SlidersAddComponent },
  {
    path: "slider/:sliderId/guncelle",
    component: SlidersUpdateComponent,
  },

  { path: "login", component: LoginComponent },

  { path: "products", component: ProductsComponent, canActivate: [LoginGuard] }, // en son tüm componentler için kullanılması gerekiyor....//
  { path: "product-add", component: ProductAddComponent },
  { path: "product/:productId/guncelle", component: ProductEditComponent },
];
