import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-word-viewer',
  template: `
    <iframe [src]="docUrl" style="width:100%; height:600px;" frameborder="0"></iframe>
  `
})
export class WordViewerComponent implements OnInit {
  ngOnInit(): void {
    console.log('oninit');
    this.docUrl = this.generateGoogleDocsUrl(this.docPath);
  }

  constructor(private sanitizer: DomSanitizer) {
    this.docUrl = this.generateGoogleDocsUrl(this.docPath);
  }

  docPath: string = 'assets/sample_word.docx';
  docUrl: SafeResourceUrl = '';

  generateGoogleDocsUrl(path: string): SafeResourceUrl  {
    const url = `https://docs.google.com/gview?url=${location.origin}/${path}&embedded=true`;
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
