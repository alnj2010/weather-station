import { AlarmClock } from '../alarm-clock/alarm-clock';
import { Sensor } from '../domain/sensor';

export class TemperatureSensor extends Sensor {
  constructor(alarmClock: AlarmClock) {
    super(1 * 60 * 1000, alarmClock);
  }

  read(): number {
    return new Date().getTime();
  }
}
