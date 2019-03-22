import { Component, OnInit } from "@angular/core";
import { fadeAnimation } from "./shared/animations/fadeRoute";
import { SettingsService } from 'src/app/shared/services/settings.service';
import { NavbarComponent } from './index/navbar/navbar.component';
import { ProductService } from 'src/app/shared/services/product.service';
import { Routes } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = "app";

  constructor(
    private settings: SettingsService,
    private products:ProductService
  ) {
  
  }

  // Owlcarousel is a touch enabled jQuery plugin for a responsive carousel header


  ngOnInit() {
    $(document).ready(function() {
      $(".banner").owlCarousel({
        autoHeight: true,
        center: true,
        nav: true,
        items: 1,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 120000,
        autoplayHoverPause: true
      });
    });

    localStorage.setItem('avct_item',null);
    this.init();

  }

  public init() {
    this.settings.init();
    this.products.init();
    const x= this.products.getLocalStorage();
   x.then((data)=> {
    }).catch((error)=> console.log(error));

  }

}
