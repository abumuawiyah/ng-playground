import {
  Component,
  AfterContentInit,
  Input,
  HostBinding,
  OnInit
} from "@angular/core";

@Component({
  selector: "CardContent",
  template: `
    <ng-content></ng-content>
  `
})
export class CardContentComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() css: object;

  ngOnInit() {
    const { css, ...other } = this;
  }

  ngAfterContentInit() {}
}
