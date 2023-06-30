import { AlarmClock } from '../alarm-clock/alarm-clock';
import { Sensor } from '../domain/sensor';

export class BarometricPressureSensor extends Sensor {
  constructor(alarmClock: AlarmClock) {
    super(5 * 60 * 1000, alarmClock);
  }

  read(): number {
    return new Date().getTime();
  }
}
