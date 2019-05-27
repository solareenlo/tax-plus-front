import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ValueSharedService } from '../service/crypto.service';
import { ExchangeService } from '../service/exchange.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit, OnDestroy {
  public crypto = '';
  public exchange = '';
  private cryptoSubscription: Subscription;
  private exchangeSubscription: Subscription;

  constructor(
    private valueSharedService: ValueSharedService,
    private exchangeService: ExchangeService) {}

  ngOnInit() {
    this.cryptoSubscription = this.valueSharedService.sharedDataSource$.subscribe(msg => {
      this.crypto = msg;
    });
    this.exchangeSubscription = this.exchangeService.selectedExchange$.subscribe(msg => {
      this.exchange = msg;
    });
  }

  onClick() {
    console.log(this.crypto, this.exchange);
  }

  ngOnDestroy() {
    this.cryptoSubscription.unsubscribe();
    this.exchangeSubscription.unsubscribe();
  }
}
