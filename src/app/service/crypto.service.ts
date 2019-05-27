import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ValueSharedService {
  crypto = '';
  exchange = '';
  csv = '';

  // データの変更通知をするためのオブジェクト
  private sharedDataSource = new Subject<string>();

  // Subscribeするためのプロパティ
  public sharedDataSource$ = this.sharedDataSource.asObservable();

  // ValueSharedServiceのインスタンスを生成する
  constructor() {}

  // データの更新イベント
  public onNotifySharedDataChanged(updated: string) {
    this.sharedDataSource.next(updated);
  }
}
