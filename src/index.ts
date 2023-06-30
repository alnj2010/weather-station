import { BarometricPressureSensor } from './pressure/barometric-pressure-sensor';
import { MonitoringScreen } from './monitoring-screen/monitoring-screen';
import { AlarmClock } from './alarm-clock/alarm-clock';
import { TemperatureSensor } from './temperature/temperature-sensor';
import { BarometricPressureTrendSensor } from './pressure/barometric-pressure-trend-sensor';

const main = () => {
  const alarmClock: AlarmClock = new AlarmClock();
  const barometricPressureSensor = new BarometricPressureSensor(alarmClock);
  const barometricPressureTrendSensor = new BarometricPressureTrendSensor(
    barometricPressureSensor,
    alarmClock,
  );
  const temperatureSensor = new TemperatureSensor(alarmClock);

  new MonitoringScreen(
    temperatureSensor,
    barometricPressureSensor,
    barometricPressureTrendSensor,
  );
};

main();
