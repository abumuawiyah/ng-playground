import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "LI",
  template: `
    <ng-content></ng-content>
  `
})
export class LiComponent implements OnInit, AfterContentInit {
  @Input() css: object;
  @HostBinding("class") className;

  constructor() {}

  ngOnInit() {
    const { css, ...other } = this;
  }

  ngAfterContentInit() {}
}
