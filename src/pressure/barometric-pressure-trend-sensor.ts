import { AlarmClock } from '../alarm-clock/alarm-clock';
import { Observer } from '../domain/observer';
import { Sensor } from '../domain/sensor';
import { BarometricPressureSensor } from './barometric-pressure-sensor';

enum PressureTrend {
  RISING = 1,
  FALLING = -1,
  STABLE = 0,
}
export class BarometricPressureTrendSensor extends Sensor implements Observer {
  private pressurePerMinute: Array<number> = [];
  constructor(
    barometricPressureSensor: BarometricPressureSensor,
    alarmClock: AlarmClock,
  ) {
    super(1 * 60 * 1000, alarmClock);
    barometricPressureSensor.addObserver(this);
  }

  update(value: number): void {
    this.pressurePerMinute.push(value);
  }

  read(): number {
    return PressureTrend.RISING;
  }
}
