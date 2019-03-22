/**
 * To define how much time has elapsed from the date being shared - Basical to time limit interactions with the application 
 * To logout the application after certain time intervals e.g. after certain mins of login to avoid the situation of infinite login scenario
 */
import { Pipe, PipeTransform } from "@angular/core";

declare var moment: any;

@Pipe({
  name: "momentTimeAgo"
})
export class MomentTimeAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (
      moment(value)
        // .startOf("day")
        .from(new Date())
    );
  }
}
