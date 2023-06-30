import { Observable } from '../domain/observable';
import { BarometricPressureObserver } from './barometric-pressure-observer';
import { BarometricPressureTrendObserver } from './barometric-pressure-trend-observer';
import { TemperatureObserver } from './temperature-observer';

export class MonitoringScreen {
  constructor(
    temperatureObservable: Observable,
    barometricPressureObservable: Observable,
    barometricPressureTrendObservable: Observable,
  ) {
    const temperatureObserver = new TemperatureObserver(this);
    const barometricPressureObserver = new BarometricPressureObserver(this);
    const barometricPressureTrendObserver = new BarometricPressureTrendObserver(
      this,
    );

    temperatureObservable.addObserver(temperatureObserver);
    barometricPressureObservable.addObserver(barometricPressureObserver);
    barometricPressureTrendObservable.addObserver(
      barometricPressureTrendObserver,
    );
  }

  displayTemp(value: number) {
    console.log('Temperature: ' + value);
  }

  displayPreassure(value: number) {
    console.log('Barometric Pressure: ' + value);
  }

  displayPreassureTrend(value: number) {
    console.log('Barometric Pressure Trend: ' + value);
  }
}
