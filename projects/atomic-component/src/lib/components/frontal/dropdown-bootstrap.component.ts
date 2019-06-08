import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  AfterContentInit
} from "@angular/core";
import { getStyleSheet, Sheet } from "../../utils/sheet";
import { Item, itemToString } from "./dropdown";

@Component({
  selector: "DropdownBootstrap",
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
          <button frontalButton [class]="classes.input">
            {{ selectedItem ? selectedItem.name : "Select your item" }}
          </button>

          <ul frontalList *ngIf="isOpen" [class]="classes.list">
            <li
              frontalItem
              *ngFor="let item of items; let index = index"
              [value]="item"
              [class]="highlightedIndex === index ? classes.highlight : ''"
            >
              {{ item.name }}
            </li>
          </ul>
        </Box>
      </ng-template>
    </frontal>
  `
})
export class DropdownBootstrapComponent implements OnInit, AfterContentInit {
  @Input() items: Item[];
  @Input() inputProps: object;
  @Input() listProps: object;
  @Input() label: string;
  @Input() variant: string;
  @HostBinding() className;
  public sheet: Sheet;
  public classes: object;
  public isOpen: boolean;
  public variants: any;
  public itemToString = itemToString;

  ngOnInit() {
    const { inputProps, listProps } = this;
    this.variants = {
      secondary: {
        color: "#fff",
        backgroundColor: "#6c757d",
        borderColor: "#6c757d",
        whiteSpace: "nowrap",
        "&:hover": {
          color: "#fff",
          backgroundColor: "#5a6268",
          borderColor: "#545b62"
        }
      }
    };
    this.sheet = getStyleSheet({
      input: {
        display: "inline-block",
        fontWeight: 400,
        color: "#212529",
        textAlign: "center",
        userSelect: "none",
        backgroundColor: "transparent",
        border: "1px solid transparent",
        padding: ".375rem .75rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        borderRadius: ".25rem",
        transition:
          "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        "&::after": {
          display: "inline-block",
          marginLeft: ".255em",
          verticalAlign: ".255em",
          content: '""',
          borderTop: ".3em solid",
          borderRight: ".3em solid transparent",
          borderBottom: 0,
          borderLeft: ".3em solid transparent"
        },
        ...this.variants.secondary,
        ...inputProps
      },
      chevron: {
        transform: "rotate(180deg)",
        flex: "0 0 16px"
      },
      list: {
        textIndent: 16,
        border: "1px solid",
        lineHeight: 2,
        ...listProps
      },
      highlight: {
        background: "red"
      }
    });
  }

  ngAfterContentInit() {
    this.classes = this.sheet.classes;
  }

  onSelect(item: Item) {
    alert(`${item.name} selected!`);
  }
}
