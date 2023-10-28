import { ConditionDisplay } from './conditionDisplay';
import { StatisticsDisplay } from './statisticDisplay';
import { WeatherData } from './weatherData';
import { WeatherStation } from './weatherStation';

describe('[Observer - lab] Weather station measurement changed', () => {
  it('display should be called when measurement changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    // when
    weatherStation.update(data);

    // then
    expect(weatherStation.updateCurrentConditionsDisplay()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
    expect(weatherStation.updateStatisticsDisplay()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
    expect(weatherStation.updateForecastDisplay()).toBe(
      'Forecast: More of the same'
    );
  });

  it('should notify observers to display current weather condition', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    const conditionDisplay = new ConditionDisplay();
    const statisticDisplay = new StatisticsDisplay();

    weatherStation.registerObserver(conditionDisplay);
    weatherStation.registerObserver(statisticDisplay);

    // when
    weatherStation.update(data);

   
    expect(conditionDisplay.display()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );

    expect(statisticDisplay.display()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
  });
});
