import { action } from "@storybook/addon-actions";
import { BrowserModule } from "@angular/platform-browser";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

import { AtomicComponentModule } from "projects/atomic-component/src/projects";

storiesOf("TextField", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("default", () => {
    return {
      template: `<TextField [disabled]="disabled" [placeholder]="placeholder" [error]="error" [value]="value"></TextField>`,
      props: {
        disabled: boolean("disabled", false),
        error: boolean("error", false),
        value: text("value", ""),
        placeholder: text("placeholder", "type here..")
      }
    };
  });
