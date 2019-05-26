import { Component, Input } from "@angular/core";

@Component({
  selector: "TabPanel",
  template: `
    <ng-content *ngIf="active"></ng-content>
  `
})
export class TabPanelComponent {
  @Input() active: boolean;
}
