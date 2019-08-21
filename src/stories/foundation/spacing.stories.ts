import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Foundation", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("Spacing System", () => {
    return {
      template: `
        <w3c-theme-provider>
          <w3c-button
            [variant]="variant"
            [small]="small"
            [disable]="disable"
            (click)="handleClick($event, {data: 1})"
          >
            Button
          </w3c-button>
        </w3c-theme-provider>
      `,
      props: {
        variant: select("variant", ["green", "red"], "green"),
        small: boolean("small", true),
        disable: boolean("disable", false),
        handleClick: action("clicked")
      }
    };
  });
