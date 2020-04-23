import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../service/number/number.service';

@Component({
  selector: 'app-promobse',
  templateUrl: './promobse.component.html',
  styleUrls: ['./promobse.component.css']
})
export class PromobseComponent implements OnInit {

  message: string;
  class = [];
  numbers: number[];
  disabled = false;

  obsMessage: string;
  obsDisabled = false;
  obsNumbers: number[];

  constructor(private numberService: NumberService) { }

  ngOnInit(): void {
  }

  public btnPromise(): void {
    this.numbers = [];
    this.message = `En attente d'une réponse du serveur ...`;
    this.class = ['text-primary'];
    this.disabled = true;

    this.numberService.getPromiseNumber().then( (numbers: number[]) => {
      this.numbers = numbers;
      this.message = null;
      this.class = [];
    }).catch( (error: string) => {
      this.message = error;
      this.class = ['alert', 'alert-warning'];
    }).finally( () => {
      this.disabled = false;
    });

  }

  public btnObservable(): void {
    this.obsNumbers = [];
    this.obsMessage = null;
    this.obsDisabled = true;

    this.numberService.getObservableNumber().subscribe((numbers: number[]) => {
      this.obsNumbers = numbers;
    }, () => { }, () => {
      this.obsDisabled = false;
    });
  }
}
