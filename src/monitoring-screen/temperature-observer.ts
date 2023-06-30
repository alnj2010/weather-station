import { MonitoringScreen } from './monitoring-screen';
import { Observer } from '../domain/observer';

export class TemperatureObserver implements Observer {
  constructor(private monitoringScreen: MonitoringScreen) {}
  update(value: number) {
    this.monitoringScreen.displayTemp(value);
  }
}
