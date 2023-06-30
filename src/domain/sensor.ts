import { AlarmClock } from '../alarm-clock/alarm-clock';
import { AlarmListener } from './alarm-listener';
import { Observable } from './observable';

export abstract class Sensor extends Observable {
  private itsLastValue = 0;
  constructor(interval: number, alarmClock: AlarmClock) {
    super();
    const alarmListener = new (class implements AlarmListener {
      constructor(private sensor: Sensor) {}
      wakeup() {
        this.sensor.check();
      }
    })(this);

    alarmClock.wakeEvery(interval, alarmListener);
  }
  protected abstract read(): number;
  public check(): void {
    const itsActualValue = this.read();
    if (itsActualValue !== this.itsLastValue) {
      this.itsLastValue = itsActualValue;
      this.notifyObservers(itsActualValue);
    }
  }
}
