import { MonitoringScreen } from './monitoring-screen';
import { Observer } from '../domain/observer';

export class BarometricPressureObserver implements Observer {
  constructor(private monitoringScreen: MonitoringScreen) {}
  update(value: number) {
    this.monitoringScreen.displayPreassure(value);
  }
}
