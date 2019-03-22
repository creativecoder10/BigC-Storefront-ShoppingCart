import { Component, OnInit } from "@angular/core";

/**
 * Custom services 
 */
import { SettingsService } from 'src/app/shared/services/settings.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  constructor(
    private settings: SettingsService,
    private products: ProductService
  ) { }

  ngOnInit() {
    // this.settings.listen('timeline', (list) =>
    //   console.log(list));

      
  }
}
