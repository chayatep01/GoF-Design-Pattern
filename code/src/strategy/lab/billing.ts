import { HourFix } from './packages/fixedPackageCalculator';
import { HourFlex } from './packages/hourflexPackageCalculator';
import { UnknowPackage } from './packages/unknownPackageCalculator';
import { PackageType } from './packages/packageType';
import { Stepping } from './packages/steppingCalculator';

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: string;

  constructor(totalHours: number, packageType: string) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = this
    .package(this.packageType)
    .calculate(this.totalHours)

    return this.vatInclued(total)
  }

  package(packageType: string) {
    switch(packageType) {
      case PackageType.FIXED :
        return new HourFix()
      case PackageType.HOUR_FLEX :
        return new HourFlex()
      case PackageType.STEPPING :
        return new Stepping()

      default:
        return new UnknowPackage()
    }
  }
  
  vatInclued(total: number) {
    return total + (total * this.vatRate) / 100;
  }
}
