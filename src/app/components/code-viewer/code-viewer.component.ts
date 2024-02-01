import { Component, Input, OnInit } from '@angular/core';
import { HighlightJsDirective, HighlightJsConfig } from 'ngx-highlight-js';

@Component({
  selector: 'app-code-viewer',
  standalone: true,
  imports: [HighlightJsDirective],
  template: `<textarea highlight-js [lang]="'xml'" [code]="codee"]></textarea>`,
  //template: `<pre><code [highlight]="code" [languages]="['xml']" [lineNumbers]="true" ></code></pre>`,
})
export class CodeViewerComponent {
  @Input() codee: string = '';
}
