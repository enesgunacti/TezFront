import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/products", title: "ÜRÜNLER", icon: "nc-bullet-list-67", class: "" },
  { path: "/categories", title: "KATEGORİLER", icon: "nc-tile-56", class: "" },
  { path: "/contacts", title: "İLETİŞİM", icon: "nc-pin-3", class: "" },
  {
    path: "/documents",
    title: "BELGELER",
    icon: "nc-single-copy-04",
    class: "",
  },
  { path: "/sliders", title: "SLİDERLAR", icon: "nc-image", class: "" },

  { path: "/hizmetler", title: "Hizmetler", icon: "nc-pin-3", class: "" },
  { path: "/hakkimizda", title: "Hakkımızda", icon: "nc-pin-3", class: "" },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
