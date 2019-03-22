import { Pipe, PipeTransform } from "@angular/core";
/**
 * To filter products by price
 */
@Pipe({
  name: "filterByPrice"
})
export class FilterByPricePipe implements PipeTransform {
  transform(items: any, minPrice?: any,maxPrice?: any): any {
    return items.filter(item => item["price"] >= minPrice && item["price"] <= maxPrice)
    
  }
}
