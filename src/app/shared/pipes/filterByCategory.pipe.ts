import { Pipe, PipeTransform } from "@angular/core";
/**
 * To filter products by Category
 */
@Pipe({
  name: "filterByCategory"
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== "All") {
      return select
        ? items.filter(item => item["productCategory"] === select)
        : items;
    } else {
      return items;
    }
  }
}
