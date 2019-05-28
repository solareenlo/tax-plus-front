import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ValueSharedService } from '../service/crypto.service';
import { ExchangeService } from '../service/exchange.service';
import { CsvService } from '../service/csv.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit, OnDestroy {
  public crypto = '';
  public exchange = '';
  public file: File | null = null;
  private cryptoSubscription: Subscription;
  private exchangeSubscription: Subscription;
  private csvSubscription: Subscription;

  constructor(
    private valueSharedService: ValueSharedService,
    private exchangeService: ExchangeService,
    private csvService: CsvService) {}

  ngOnInit() {
    this.cryptoSubscription = this.valueSharedService.sharedDataSource$.subscribe(msg => {
      this.crypto = msg;
    });
    this.exchangeSubscription = this.exchangeService.selectedExchange$.subscribe(msg => {
      this.exchange = msg;
    });
    this.csvSubscription = this.csvService.inputCsv$.subscribe(csv => {
      this.file = csv;
    });
  }

  onClick(): void {
    console.log(this.crypto, this.exchange, this.file.name);
  }

  ngOnDestroy() {
    this.cryptoSubscription.unsubscribe();
    this.exchangeSubscription.unsubscribe();
    this.csvSubscription.unsubscribe();
  }
}
