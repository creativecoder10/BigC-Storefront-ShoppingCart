import { Component, OnInit } from "@angular/core";
import { fadeAnimation } from "./shared/animations/fadeRoute";
import { SettingsService } from 'src/app/shared/services/settings.service';
import { NavbarComponent } from './index/navbar/navbar.component';
import { ProductService } from 'src/app/shared/services/product.service';
import { RouterService } from "src/app/shared/services/router.service";
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
    private products:ProductService,     
    private routerService: RouterService
  ) {
  
  }



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
     this.routerService.navigate(['']);
    this.init();

  }

  public init() {
    this.settings.init();
    this.products.init();
    const x= this.products.getLocalStorage();
   x.then((data)=> {
    }).catch((error)=> console.log(error, "No products in local storage"));

  }

}
