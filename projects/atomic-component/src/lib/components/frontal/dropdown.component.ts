import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  AfterContentInit
} from "@angular/core";

import { Item, itemToString } from "./dropdown";

@Component({
  selector: "Dropdown",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <frontal
      #frontal
      [itemToString]="itemToString"
      [isOpen]="false"
      on-select="onSelect($event)"
    >
      <ng-template
        let-value="inputValue"
        let-isOpen="isOpen"
        let-highlightedIndex="highlightedIndex"
        let-selectedItem="selectedItem"
      >
        <Box [flexDirection]="'column'">
          <Box>
            <button frontalButton>
              {{ selectedItem ? selectedItem.name : "Select your item" }}
            </button>
            <ChevronDownIcon *ngIf="!isOpen"></ChevronDownIcon>
            <ChevronUpIcon *ngIf="isOpen"></ChevronUpIcon>
          </Box>

          <ul *ngIf="isOpen" frontalList>
            <li
              *ngFor="let item of items; let index = index"
              [value]="item"
              frontalItem
            >
              {{ item.name }}
            </li>
          </ul>
        </Box>
      </ng-template>
    </frontal>
  `
})
export class DropdownComponent implements OnInit, AfterContentInit {
  @Input() items: Item[];
  @Input() inputProps: object;
  @Input() listProps: object;
  @Input() label: string;
  @Input() variant: string;
  @HostBinding() className;
  public classes: object;
  public itemToString = itemToString;

  ngOnInit() {
    const { inputProps, listProps } = this;
  }

  ngAfterContentInit() {}

  onSelect(item: Item) {
    alert(`${item.name} selected!`);
  }
}
