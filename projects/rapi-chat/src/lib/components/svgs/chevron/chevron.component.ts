import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chevron-icon",
  template: `
    <svg width="42" height="42" viewBox="0 0 24 24">
      <path d="M24 24H0V0h24v24z" fill="transparent" />
      <path
        fill="tomato"
        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
      />
    </svg>
  `
})
export class ChevronComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
