import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Atoms/Button", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("w3school", () => {
    return {
      template: `
        <w3c-theme-provider>
          <ng-template let-palette="palette">
            <w3c-button
              [variant]="variant"
              [small]="small"
              [disable]="disable"
              (click)="handleClick($event, {data: 1})"
            >
              Button {{palette.purple}}
            </w3c-button>
          </ng-template>
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
