import { action } from "@storybook/addon-actions";
import { BrowserModule } from "@angular/platform-browser";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { RapiChatModule } from "projects/rapi-chat/src/public-api";
import { CommonModule } from "@angular/common";

storiesOf("Rapi-chat|Chat aside", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserModule, RapiChatModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("default", () => {
    return {
      template: `<ThemeProvider><chat-aside></chat-aside></ThemeProvider>`,
      props: {
        disabled: boolean("disabled", false),
        label: text("value", "Button"),
        type: select(
          "type",
          ["primary", "secondary", "warning", "info", "success"],
          "primary"
        )
      }
    };
  });
