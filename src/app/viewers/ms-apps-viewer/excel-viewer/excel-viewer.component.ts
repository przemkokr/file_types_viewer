import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-viewer',
  template: '<div *ngFor="let row of data">{{ row | json }}</div>'
})
export class ExcelViewerComponent {
  data!: any[];

  constructor(private http: HttpClient) {
    this.http.get('assets/sample_excel.xlsx', { responseType: 'arraybuffer' }).subscribe(response => {
      const workbook = XLSX.read(new Uint8Array(response), { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      this.data = XLSX.utils.sheet_to_json(worksheet);
    });
  }
}
