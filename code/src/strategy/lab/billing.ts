import { HourFix } from './packages/fixedPackageCalculator';
import { HourFlex } from './packages/hourflexPackageCalculator';
import { UnknowPackage } from './packages/unknownPackageCalculator';
import { PackageType } from './packages/packageType';
import { Stepping } from './packages/steppingCalculator';
import { packageFactory } from './packages/packageFactory';

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: string;

  constructor(totalHours: number, packageType: string) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = packageFactory
    .createPackage(this.packageType)
    .calculate(this.totalHours)

    return this.vatInclued(total)
  }
  
  vatInclued(total: number) {
    return total + (total * this.vatRate) / 100;
  }
}
