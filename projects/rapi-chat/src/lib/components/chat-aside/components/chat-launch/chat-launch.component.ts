import { Component, OnInit } from "@angular/core";
import spacing from "../../../theme/spacing";
import colors from "../../../theme/colors";

@Component({
  selector: "chat-launch",
  template: `
    <Box
      justifyContent="space-around"
      alignItems="center"
      [css]="{
        height: '${spacing.base * 5}px',
        background: '${colors.darkSlateGray}',
        color: '${colors.white}'
      }"
    >
      <Box
        justifyContent="space-between"
        alignItems="center"
        flex="0 0 auto"
        [css]="{
          width: '100%'
        }"
      >
        <span>Name</span>
        <launch-icon></launch-icon>
      </Box>
    </Box>
  `
})
export class ChatLaunchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
