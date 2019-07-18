import { Component, HostBinding, Input, AfterContentInit } from "@angular/core";

@Component({
  selector: "TabPanel",
  template: `
    <ng-content *ngIf="active"></ng-content>
  `
})
export class TabPanelComponent implements AfterContentInit {
  @HostBinding("class") className;
  @Input() active: boolean;
  @Input() css: object;

  ngAfterContentInit() {
    const { css } = this;
  }
}
