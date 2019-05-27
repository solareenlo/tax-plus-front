import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ExchangeService {
  exchange = '';
  private selectedExchange = new Subject<string>();
  public selectedExchange$ = this.selectedExchange.asObservable();
  constructor() {}
  public onNotifySelectedExchange(selected: string) {
    this.selectedExchange.next(selected);
  }
}
