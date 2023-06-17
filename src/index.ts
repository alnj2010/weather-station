import { Scheduler } from './Scheduler';
import { BarometricPressureSensor } from './barometric-pressure-sensor';
import { MonitoringScreen } from './monitoring-screen';
import { NimbusScheduler } from './nimbus-scheduler';
import { TemperatureSensor } from './temperature-sensor';

const main = () => {
  const temperatureSensor = new TemperatureSensor();
  const barometricPressureSensor = new BarometricPressureSensor();

  const monitoringScreen = new MonitoringScreen();

  const scheduler: Scheduler = new NimbusScheduler(
    temperatureSensor,
    barometricPressureSensor,
    monitoringScreen,
  );

  setInterval(() => {
    scheduler.tic();
  }, 1000);
};

main();
