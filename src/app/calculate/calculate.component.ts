import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ValueSharedService } from '../service/crypto.service';
import { ExchangeService } from '../service/exchange.service';
import { CsvService } from '../service/csv.service';
import { Post } from '../model/post.model';
import { PostsService } from '../service/posts.service';

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
    private csvService: CsvService,
    private postsService: PostsService
  ) {}

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

  onClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(this.crypto, this.exchange);
    console.log(this.crypto, this.exchange, this.file.name);
  }

  ngOnDestroy() {
    this.cryptoSubscription.unsubscribe();
    this.exchangeSubscription.unsubscribe();
    this.csvSubscription.unsubscribe();
  }
}
