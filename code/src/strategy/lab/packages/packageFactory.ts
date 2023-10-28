import { HourFix } from './fixedPackageCalculator';
import { HourFlex } from './hourflexPackageCalculator';
import { UnknowPackage } from './unknownPackageCalculator';
import { PackageType } from './packageType';
import { Stepping } from './steppingCalculator';

export class packageFactory {

  static createPackage(packageType: string) {
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
}