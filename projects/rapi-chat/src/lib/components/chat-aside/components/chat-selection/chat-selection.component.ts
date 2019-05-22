import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { getStyleSheet, Sheet } from "../../../../utils/sheet";
import spacing from "../../../theme/spacing";
import colors from "../../../theme/colors";

const styles: any = {
  selection: {}
};

@Component({
  selector: "chat-selection",
  template: `
    <Box
      justifyContent="space-between"
      alignItems="center"
      [css]="{
        height: '${spacing.base * 5}px',
        background: '${colors.darkSlateGray}',
        color: '${colors.white}'
      }"
    >
      <Box justifyContent="space-between" alignItems="center" flex="0 0 20%">
        <span>Chat</span>
        <chevron-icon></chevron-icon>
      </Box>
      <list-icon></list-icon>
    </Box>
  `
})
export class ChatSelectionComponent implements OnInit {
  @Input() css: object;
  @HostBinding("class") classes;

  ngOnInit() {
    const sheet: any = getStyleSheet(styles);
    this.classes = `${sheet.classes.selection}`;
  }
}
