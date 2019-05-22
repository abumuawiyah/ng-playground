import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { AtomicComponentModule } from "projects/atomic-component/src/projects";
import { CommonModule } from "@angular/common";

storiesOf("Atom|Button", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("default", () => {
    return {
      template: `<Button [type]="type" [disabled]="disabled" [label]="label">Hey</Button>`,
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
