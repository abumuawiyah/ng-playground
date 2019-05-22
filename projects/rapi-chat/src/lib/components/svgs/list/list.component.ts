import { Component, OnInit } from "@angular/core";

@Component({
  selector: "list-icon",
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" fill="transparent">
        <path d="M0 0h24v24H0V0z" />
        <path d="M0 0h24v24H0V0z" />
      </g>
      <path
        fill="#ffffff"
        d="M3 13h2v-2H3v2zm0
          4h2v-2H3v2zm0-8h2V7H3v2zm4
          4h14v-2H7v2zm0 4h14v-2H7v2zM7
          7v2h14V7H7zm-4 6h2v-2H3v2zm0
          4h2v-2H3v2zm0-8h2V7H3v2zm4
          4h14v-2H7v2zm0 4h14v-2H7v2zM7
          7v2h14V7H7z"
      />
    </svg>
  `
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
