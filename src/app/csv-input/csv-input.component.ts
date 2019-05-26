import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-csv-input',
  templateUrl: './csv-input.component.html',
  styleUrls: ['./csv-input.component.css']
})
export class CsvInputComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  constructor() { }

  ngOnInit() {
  }

}
