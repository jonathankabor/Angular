import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {
  }

  public getPromiseNumber(): Promise<number[]> {
    const randError = Math.floor(Math.random() * 3 + 1);
    const randTime = Math.floor(Math.random() * 5000 + 1000);

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (randError === 3) {
          reject(`La ressource demandé n'est pas disponible pour le moment.`);
        }

        resolve(this.numbers);

      }, randTime);
    });

  }

  public getObservableNumber(): Observable<number[]> {

    // next(), error(), complete()
    return new Observable<number[]>((subcriber: Subscriber<number[]>) => {
      subcriber.next(this.numbers);

      setTimeout(() => {
        subcriber.next(this.numbers.map(num => num + 10));
      }, 2000);

      setTimeout(() => {
        subcriber.next(this.numbers.map(num => num + 20));
      }, 4000);

      setTimeout(() => {
        subcriber.next(this.numbers.map(num => (num + 10) * 10));
        subcriber.complete();
      }, 6000);

    });

  }
}
