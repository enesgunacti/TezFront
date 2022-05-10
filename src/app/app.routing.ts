import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { MainpageComponent } from "./mainpage/mainpage.component";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (x) => x.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: "mainpage",
    component: MainpageComponent,
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "products",
  },
];
