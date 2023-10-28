import { MonthlyCalculator } from "./monthlyCalculator";

export class HourFlex implements MonthlyCalculator{
  calculate(totalHours: number): number {
    return totalHours * 50;
  }
}