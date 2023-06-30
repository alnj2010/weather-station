import { MonitoringScreen } from './monitoring-screen';
import { Observer } from '../domain/observer';

export class BarometricPressureTrendObserver implements Observer {
  constructor(private monitoringScreen: MonitoringScreen) {}
  update(value: number) {
    this.monitoringScreen.displayPreassureTrend(value);
  }
}
