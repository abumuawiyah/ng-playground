import { Component, ContentChildren, QueryList } from "@angular/core";
import { TabPanelComponent } from "./tab-panel.component";

@Component({
  selector: "TabPanels",
  template: `
    <ng-content></ng-content>
  `
})
export class TabPanelsComponent {
  @ContentChildren(TabPanelComponent) children!: QueryList<TabPanelComponent>;
}
