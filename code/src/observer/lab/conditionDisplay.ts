import { WeatherObserver } from "./weatherObserver";
import { WeatherData } from "./weatherData";

export class ConditionDisplay implements WeatherObserver{
  private data: WeatherData | undefined;

  update(data : WeatherData) {
    this.data = data;
  }

  display(): string {
    if(!this.data){
      throw new Error("no data");
    }
    return `Current conditions: ${this.data.temperature}C degrees and ${this.data.humidity}% humidity`;
  }
}