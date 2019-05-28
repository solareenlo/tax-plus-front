import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class CsvService {
  private inputCsv  = new Subject<File>();
  public inputCsv$ = this.inputCsv.asObservable();
  constructor() {}
  public onNotifyInputCsv(input: File) {
    this.inputCsv.next(input);
  }
}
