import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { getStyleSheet, Sheet } from "../../../../utils/sheet";
import spacing from "../../../theme/spacing";
import colors from "../../../theme/colors";

const styles: any = {
  avatar: {
    borderRadius: "50%"
  }
};

@Component({
  selector: "chat-contact",
  template: `
    <Box
      justifyContent="space-around"
      alignItems="center"
      [css]="{
        height: '${spacing.base * 8}px',
        background: '${colors.slateGray}',
        color: '${colors.white}'
      }"
    >
      <Box
        justifyContent="space-around"
        alignItems="center"
        flex="0 0 auto"
        [css]="{
          width: '100%'
        }"
      >
        <figure>
          <img
            [class]="classes.avatar"
            src="https://avatars.io/twitter/aziziyazit/small"
            alt="pic"
          />
        </figure>
        <Box
          justifyContent="space-between"
          alignItems="center"
          [css]="{
            width: '100%'
          }"
        >
          <Box flexDirection="column">
            <span>Name</span>
            <span>Status</span>
          </Box>
          <span>3</span>
        </Box>
      </Box>
    </Box>
  `
})
export class ChatContactComponent implements OnInit {
  @Input() css: object;
  public classes: object;

  ngOnInit() {
    const sheet: any = getStyleSheet(styles);
    this.classes = sheet.classes;
    console.log(sheet.classes);
  }
}
