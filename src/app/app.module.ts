import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from "@angular/forms";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AdminLayoutComponent, AppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: false,
      relativeLinkResolution: "legacy",
    }),
    FormsModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-right",
    }),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
