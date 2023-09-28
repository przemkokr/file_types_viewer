import { Component, OnInit } from '@angular/core';
import { RTFJS } from 'rtf.js';
import { RtfService } from './rtf-serv.service';

@Component({
  selector: 'app-rtf-viewer',
  template: '<div [innerHTML]="rtfContent"></div>'
})
export class RtfViewerComponent implements OnInit {
  rtfContent!: string;

  constructor(private rtfService: RtfService) {}

  ngOnInit(): void {
    this.rtfService.fetchLocalRtfFile().subscribe(arrayBuffer => {
      const doc = new RTFJS.Document(arrayBuffer, {});
      doc.render().then(htmlElements => {
        const htmlStrings = htmlElements.map(element => element.outerHTML);
        this.rtfContent = htmlStrings.join('');
      }).catch(error => console.error(error));
    });
  }
}
