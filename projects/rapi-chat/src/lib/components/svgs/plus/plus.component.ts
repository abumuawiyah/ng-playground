import { Component, OnInit } from "@angular/core";

@Component({
  selector: "plus-icon",
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="transparent" d="M0 0h24v24H0V0z" />
      <path fill="#ffffff" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  `
})
export class PlusComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
