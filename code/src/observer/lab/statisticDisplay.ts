import { WeatherObserver } from "./weatherObserver";
import { WeatherData } from "./weatherData";

export class StatisticsDisplay implements WeatherObserver{
  private data: WeatherData | undefined;

  update(data : WeatherData) {
    this.data = data;
  }

  display(): string {
    if(!this.data){
      throw new Error("no data");
    }
    return `Avg/Max/Min temperature = ${this.data.temperature}/${this.data.humidity}/${this.data.pressure}`;
  }
}