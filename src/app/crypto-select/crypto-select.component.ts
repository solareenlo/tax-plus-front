import { Component, OnInit } from '@angular/core';
import { ValueSharedService } from '../service/crypto.service';

export interface Crypto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crypto-select',
  templateUrl: './crypto-select.component.html',
  styleUrls: ['./crypto-select.component.css']
})
export class CryptoSelectComponent implements OnInit {
  selectedValue = '';
  test: string;

  crypto: Crypto[] = [
    {value: 'btc-0', viewValue: 'BTC'},
    {value: 'ltc-1', viewValue: 'LTC'},
    {value: 'eth-2', viewValue: 'ETH'},
    {value: 'zen-3', viewValue: 'ZEN'},
    {value: 'ngr-4', viewValue: 'NGR'},
    {value: 'xzc-5', viewValue: 'XZC'}
  ];

  constructor(private valueSharedService: ValueSharedService) { }

  ngOnInit() {
  }

  onSelect() {
    this.valueSharedService.crypto = this.selectedValue;
    this.valueSharedService.onNotifySharedDataChanged(this.selectedValue);
  }

}
