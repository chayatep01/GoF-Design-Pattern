import { MonthlyCalculator } from "./monthlyCalculator";

export class UnknowPackage implements MonthlyCalculator{
  calculate(totalHours: number): number {
   return 0;
  }
}