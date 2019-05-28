import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../service/exchange.service';

export interface Exchanges {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-exchange-select',
  templateUrl: './exchange-select.component.html',
  styleUrls: ['./exchange-select.component.css']
})
export class ExchangeSelectComponent implements OnInit {
  selectedValue = '';
  public exchange: string;

  exchanges: Exchanges[] = [
    {value: 'antpool-0', viewValue: 'ANTPOOL'},
    {value: 'f2pool-1', viewValue: 'F2Pool'},
    {value: 'zensystem-2', viewValue: 'ZenSystem'},
    {value: 'energi', viewValue: 'Energi'},
    {value: 'zcoin', viewValue: 'Zcoin'}
  ];

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
  }

  onSelect(): void {
    this.exchangeService.onNotifySelectedExchange(this.selectedValue);
  }
}
