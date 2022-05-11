import { Component, OnInit } from "@angular/core";
import { Contact } from "app/pages/contacts/contact";
import { Hizmet } from "app/pages/hizmetler/hizmet";
import { Product } from "app/pages/products/product";
import { Slider } from "app/pages/sliders/slider";
import { ContactService } from "app/services/contact.service";
import { HizmetService } from "app/services/hizmet.service";
import { ProductService } from "app/services/product.service";
import { SliderService } from "app/services/slider.service";

@Component({
  selector: "mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.scss"],
})
export class MainpageComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private hizmetService: HizmetService,
    private contactService: ContactService,
    private sliderService: SliderService
  ) {}

  products: Product[];
  hizmetler: Hizmet[];
  contacts: Contact[];
  sliders: Slider[];
  ngOnInit(): void {
    this.getProducts();
    this.getHizmetler();
    this.getContacts();
    this.getSliders();
  }

  getProducts() {
    this.productService.getÜrünler().subscribe((response) => {
      this.products = response.data;
    });
  }

  getHizmetler() {
    this.hizmetService.getHizmetler().subscribe((response) => {
      this.hizmetler = response.data;
    });
  }

  getContacts() {
    this.contactService.getContacts().subscribe((response) => {
      this.contacts = response.data;
    });
  }
  getSliders() {
    this.sliderService.getSliders().subscribe((response) => {
      this.sliders = response.data;
    });
  }
}
