import { action } from "@storybook/addon-actions";
import { BrowserModule } from "@angular/platform-browser";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { RapiChatModule } from "projects/rapi-chat/src/public-api";
import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/projects";

storiesOf("Rapi-chat|Chat aside", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserModule, RapiChatModule, AtomicComponentModule],
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
  })
  .add("Test", () => {
    const style = {
      width: "100px",
      height: "100px",
      margin: "10px",
      alignItems: "center",
      justifyContent: "center"
    };

    return {
      template: `
        <ThemeProvider>
          <Box alignItems="center" [css]="{width: '100%', justifyContent: 'center'}">
            <Box [css]="customStyle({background: 'red'})">Box 1</Box>
            <Box [css]="customStyle({background: 'yellow'})">Box 2</Box>
            <Box [css]="customStyle({background: 'blue'})">Box 3</Box>
          </Box>
        </ThemeProvider>
      `,
      props: {
        customStyle: customStyle => {
          return { ...style, ...customStyle };
        }
      }
    };
  });
