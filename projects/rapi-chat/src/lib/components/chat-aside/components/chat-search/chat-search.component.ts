import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { getStyleSheet, Sheet } from "../../../../utils/sheet";
import spacing from "../../../theme/spacing";
import colors from "../../../theme/colors";

const styles: any = {
  search: {}
};

@Component({
  selector: "chat-search",
  template: `
    <Box
      justifyContent="space-between"
      alignItems="center"
      [css]="{
        height: '${spacing.base * 5}px',
        background: '${colors.dimGray}',
        color: '${colors.white}'
      }"
    >
      <Box justifyContent="space-between" alignItems="center" flex="0 0 10%">
        <search-icon></search-icon>
        <span>Chat</span>
      </Box>
      <plus-icon></plus-icon>
    </Box>
  `
})
export class ChatSearchComponent implements OnInit {
  @Input() css: object;
  @HostBinding("class") classes;

  ngOnInit() {
    const sheet: any = getStyleSheet(styles);
    this.classes = `${sheet.classes.search}`;
  }
}
