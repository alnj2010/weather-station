import { Observer } from './observer';

export class Observable {
  private observers: Array<Observer> = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  notifyObservers(value: number): void {
    this.observers.forEach((observer) => {
      observer.update(value);
    });
  }
}
