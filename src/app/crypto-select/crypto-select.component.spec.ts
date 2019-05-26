import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSelectComponent } from './crypto-select.component';

describe('CryptoSelectComponent', () => {
  let component: CryptoSelectComponent;
  let fixture: ComponentFixture<CryptoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
