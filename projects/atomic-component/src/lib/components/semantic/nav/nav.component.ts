import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "NAV",
  template: `
    <ng-content></ng-content>
  `
})
export class NavComponent implements OnInit, AfterContentInit {
  @Input() css: object;
  @HostBinding("class") className;

  constructor() {}

  ngOnInit() {
    const { css, ...other } = this;
  }

  ngAfterContentInit() {}
}
