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
  .add("Iconography", () => {
    return {
      template: `
        <ui-theme-provider>
          <ng-template let-palette="palette">
            <ui-box [customStyle]="container">
                <a-chevron-down-icon></a-chevron-down-icon>
                <a-chevron-up-icon></a-chevron-up-icon>
                <a-setting-icon></a-setting-icon>
            </ui-box>
          </ng-template>
        </ui-theme-provider>
      `,
      props: {
        container: `
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
        `
      }
    };
  });
