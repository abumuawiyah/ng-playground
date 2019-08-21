import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  ContentChild
} from "@angular/core";
import { css } from "emotion";
import { TabListComponent } from "./tab-list.component";
import { TabPanelsComponent } from "./tab-panels.component";

@Component({
  selector: "w3c-tabs",
  template: `
    <ng-content></ng-content>
  `
})
export class TabsComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() activeIndex: number;
  @ContentChild(TabListComponent, { static: false }) tabList: TabListComponent;
  @ContentChild(TabPanelsComponent, { static: false })
  tabPanels: TabPanelsComponent;
  @Input() customStyle: string;

  constructor() {}

  ngOnInit() {
    const { customStyle } = this;
    this.className = css`
      display: block;
      border: 1px solid #ccc;
      box-sizing: border-box;

      w3c-tab-list {
        overflow: hidden;
        background-color: #f1f1f1;
        display: block;
      }

      w3c-tab {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;
      }

      w3c-tab:hover {
        background-color: #ddd;
      }

      taw3c-tabb.active {
        background-color: #ccc;
      }

      w3c-tab-panels {
        display: block;
        margin: 10px;
      }

      ${customStyle}
    `;
  }

  ngAfterContentInit() {
    this.tabList.children.forEach((tab, idx) => {
      tab.index = idx;
      tab.tabClick.subscribe(({ index }) => {
        this.activeIndex = index;
        this.update();
      });
    });
    this.activeIndex = this.activeIndex ? this.activeIndex : 0;
    this.update();
  }

  update() {
    this.tabPanels.children.forEach((tabPanel, idx) => {
      tabPanel.active = idx === this.activeIndex ? true : false;
    });

    this.tabList.children.forEach((tab, idx) => {
      tab.active = idx === this.activeIndex ? true : false;
    });
  }
}
