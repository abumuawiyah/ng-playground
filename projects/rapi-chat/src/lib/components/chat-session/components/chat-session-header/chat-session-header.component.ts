import { Component, OnInit } from "@angular/core";
import spacing from "../../../theme/spacing";
import colors from "../../../theme/colors";

@Component({
  selector: "chat-session-header",
  template: `
    <Box
      justifyContent="space-between"
      alignItems="center"
      [css]="{
        height: '${spacing.base * 5}px',
        background: '${colors.slateGray}',
        color: '${colors.white}'
      }"
    >
      <Box
        justifyContent="space-between"
        alignItems="center"
        [css]="{ width: '100%', color: 'inherit' }"
      >
        <Box>
          <span>Name</span>
          <span>Status</span>
        </Box>
        <Box>
          <video-cam-icon></video-cam-icon>
          <person-add-icon></person-add-icon>
        </Box>
      </Box>
      <Box
        justifyContent="space-between"
        alignItems="center"
        [css]="{ background: '${colors.dimGray}', height: '100%' }"
      >
        <horiz-icon></horiz-icon>
      </Box>
    </Box>
  `
})
export class ChatSessionHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
