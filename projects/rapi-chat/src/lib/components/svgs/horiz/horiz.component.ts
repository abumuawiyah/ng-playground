import { Component, OnInit } from "@angular/core";

@Component({
  selector: "horiz-icon",
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="transparent" d="M0 0h24v24H0V0z" />
      <path
        fill="#ffffff"
        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12
    0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2
      .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />
    </svg>
  `
})
export class HorizComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
