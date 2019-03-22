import { Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from '../../shared/models/product';
import { ProductService } from "../../shared/services/product.service";
import { RouterService } from "../../shared/services/router.service";
import { SettingsService } from 'src/app/shared/services/settings.service';



/**
 * Navbar contains the entire details of styling and logic for the navigation bar / menu 
 */

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  /**
   * Model data structure will have the entire state of navbar 
   */
  public model: any = {};
  public showCart: boolean = false;
  cartProducts: Product[];


  constructor(

    private router: Router,
    public productService: ProductService,
    private settings: SettingsService,
    private routerService: RouterService

  ) {

  }

  ngOnInit() {
    this.init();
  }

/** init() would initialise the navbar component with menu navigation elements calling the method in setting. service
 * This would also initialise the data for products in product service
 */
  public init() {
    this.settings.listen('timeline', (list) => {
      this.model = list;
    });
    this.getCartProduct();
  }

  /**
   * Will get a specific product from the cart 
   */

  getCartProduct() {
    this.cartProducts = this.productService.getLocalCartProducts();
    this.processData();
  }

  

  /**
  * Remove a particular product from the shopping cart
  * @param key provide key value of the product that you want to be delete
  */
  removeProduct(key: any) {
    this.productService.removeLocalCartProduct(key);
  }

  /**
   * processdata() will process the data received from the api 
   */

  processData() {
    let a = JSON.parse(localStorage.getItem('avct_item')) || [];
    let uniqueTitle = a.map(element => element.title);
    let uniqueValues = uniqueTitle.filter((v, i, a) => a.indexOf(v) === i);

    for (let title in uniqueValues) {
      var count = a.filter((obj) => obj.title === title).length;
      a.map(element => {
        if (element.title === title) {
          element.quantity = count;
        }
      })
    }

    const result = Array.from(new Set(a.map(product => product.title))).map(
      title => {
        return {
          title: title,
          price: a.find(d => d.title === title).price,
          brand: a.find(d => d.title === title).brand,
          image: a.find(d => d.title === title).image,
          quantity: a.find(d => d.title === title).quantity,
        }
      }
    )
  }

  /**
   * To show and hide MY CART while clicking the drop down menu 
   */

  toggleCart() {
    this.showCart = !this.showCart;
  }

  /**
   * To navigate to home page 
   */
  manageMenu(id: any) {
    if (id === 'home') {
      this.routerService.navigate('');
    }
  }

  /**
   * To navigate to cart checkout page 
   */

  cartCheckout() {
    this.routerService.navigate('/products/cart-items');
  }


}
