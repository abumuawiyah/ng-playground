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
  selector: "Autocomplete",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <frontal [itemToString]="itemToString">
      <ng-template
        let-value="inputValue"
        let-isOpen="isOpen"
        let-highlightedIndex="highlightedIndex"
        let-selectedItem="selectedItem"
      >
        <div>
          <input placeholder="Select your item" type="text" frontalInput />

          <ng-container *ngIf="isOpen">
            <ul *ngIf="filter(value).length > 0" frontalList>
              <li
                *ngFor="
                  let item of filter(value);
                  trackBy: trackItemById;
                  let index = index
                "
                [value]="item"
                frontalItem
              >
                {{ item.name }}
              </li>
            </ul>

            <div *ngIf="filter(value).length === 0">
              No item found...
            </div>
          </ng-container>
        </div>
      </ng-template>
    </frontal>
  `
})
export class AutocompleteComponent implements OnInit, AfterContentInit {
  @Input() items: Item[];
  @Input() inputProps: object;
  @Input() listProps: object;
  @Input() label: string;
  @Input() variant: string;
  @HostBinding() className;
  public classes: object;
  public itemToString = itemToString;

  filter(query: string) {
    return this.items.filter(({ name }) =>
      name.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  filteredHeroes(query: string) {
    return this.filter(query);
  }

  trackItemById(index: number, item: Item) {
    return item.id;
  }

  ngOnInit() {
    const { inputProps, listProps } = this;
  }

  ngAfterContentInit() {}
}
