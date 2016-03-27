import {Pipe, PipeTransform} from 'angular2/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'daysLeft'})
export class DaysLeftPipe implements PipeTransform {
  transform(value:Date) : number {
      let today = new Date();
      let one_day=1000*60*60*24;
      let endDate = new Date(value.toString());
      let numberOfDaysRemaining = Math.ceil((endDate.getTime()- today.getTime())/(one_day));
      console.log('numberOfDaysRemaining: ' + numberOfDaysRemaining);
      
      return numberOfDaysRemaining;
    //   let difference = value - +(today);
    //   return difference;
    // var exp = parseFloat(exponent);
    // return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}