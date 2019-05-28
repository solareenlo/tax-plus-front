import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ExchangeService {
  // データの変更通知をするためのオブジェクト
  private selectedExchange = new Subject<string>();

  // Subscribeするためのプロパティ
  public selectedExchange$ = this.selectedExchange.asObservable();

  // ExchangeServiceのインスタンスを生成する
  constructor() {}

  // データの更新イベント
  public onNotifySelectedExchange(selected: string) {
    this.selectedExchange.next(selected);
  }
}
