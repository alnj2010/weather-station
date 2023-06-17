import { Scheduler } from './Scheduler';
import { BarometricPressureSensor } from './barometric-pressure-sensor';
import { MonitoringScreen } from './monitoring-screen';
import { TemperatureSensor } from './temperature-sensor';

export class NimbusScheduler implements Scheduler {
  private timeElapsed = 0;
  constructor(
    private temperatureSensor: TemperatureSensor,
    private barometricPressureSensor: BarometricPressureSensor,
    private monitoringScreen: MonitoringScreen,
  ) {}
  tic(): void {
    this.timeElapsed++;

    const hasOneMinuteElapsed = this.timeElapsed % 60 === 0;
    const hasFiveMinuteElapsed = this.timeElapsed % 300 === 0;

    if (hasOneMinuteElapsed) {
      const temperature = this.temperatureSensor.read();
      this.monitoringScreen.displayTemp(temperature);
    }

    if (hasFiveMinuteElapsed) {
      const barometricPressure = this.barometricPressureSensor.read();
      this.monitoringScreen.displayPreassure(barometricPressure);
    }
  }
}
