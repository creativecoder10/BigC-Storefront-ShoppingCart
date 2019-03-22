import { Pipe, PipeTransform } from "@angular/core";
/**
 *To filter products by brand 
 */
@Pipe({
  name: "filterByBrand"
})
export class FilterByBrandPipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== "All") {
      return select
        ? items.filter(item => item["productImageBrand"] === select)
        : items;
    } else {
      return items;
    }
  }
}
