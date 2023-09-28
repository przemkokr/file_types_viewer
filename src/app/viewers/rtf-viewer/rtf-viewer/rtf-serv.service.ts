import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RtfService {
  constructor(private http: HttpClient) {}

  fetchLocalRtfFile(fileName: string = 'sample.rtf'): Observable<ArrayBuffer> {
    const filePath = `assets/${fileName}`;
    return this.http.get(filePath, { responseType: 'arraybuffer' });
  }
}
