import { AlarmListener } from '../domain/alarm-listener';

export class AlarmClock {
  public wakeEvery(interval: number, alarmListener: AlarmListener): void {
    setInterval(() => {
      alarmListener.wakeup();
    }, interval);
  }
}
