import {
  Component,
  ContentChildren,
  QueryList,
  OnInit,
  HostBinding,
  Input,
  AfterContentInit
} from "@angular/core";
import { TabComponent } from "./tab.component";

@Component({
  selector: "TabList",
  template: `
    <ng-content></ng-content>
  `
})
export class TabListComponent implements AfterContentInit {
  @HostBinding("class") className;
  @Input() css: object;
  @ContentChildren(TabComponent) children!: QueryList<TabComponent>;

  ngAfterContentInit() {
    const { css } = this;

    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // width: `calc(100% / ${this.children.length})`,
    // ...css

    this.children.forEach(child => {
      child.css = {};
    });
  }
}
