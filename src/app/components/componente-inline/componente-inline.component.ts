import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-componente-inline",
  template: `
    <p>
      componente-inline works!
      <a>click me</a>
    </p>
  `,
  styles: [
    'p: { color: green; }',
    'a: { color: blue; }'
  ],
})
export class ComponenteInlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


//  ng g c components/componente-inline --inline-style --inline-template