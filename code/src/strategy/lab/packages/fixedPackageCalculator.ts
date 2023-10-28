import { MonthlyCalculator } from "./monthlyCalculator";

export class HourFix implements MonthlyCalculator{
  calculate(totalHours: number): number {
    return 500;
  }
}