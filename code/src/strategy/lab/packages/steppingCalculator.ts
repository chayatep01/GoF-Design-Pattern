import { MonthlyCalculator } from "./monthlyCalculator";

export class Stepping implements MonthlyCalculator{
  calculate(totalHours: number): number {
    if(totalHours < 50 ) {
      return totalHours * 1;
    }
    return 50 + ((totalHours - 50) * 0.5);
  }
}