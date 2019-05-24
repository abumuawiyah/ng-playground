import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-tick',
  template: `
    <p>
      tick works!
    </p>
  `,
  styleUrls: ['./tick.component.css']
})
export class TickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
