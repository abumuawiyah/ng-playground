import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "SVG",
  template: `
    <ng-content></ng-content>
  `
})
export class SvgComponent implements OnInit, AfterContentInit {
  @Input() css: object;
  @HostBinding("class") className;

  constructor() {}

  ngOnInit() {
    const { css, ...other } = this;
  }

  ngAfterContentInit() {}
}
