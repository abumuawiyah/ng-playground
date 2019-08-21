import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Molecules/Breadcrumb", module)
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
        <w3c-breadcrumbs>
          <ng-template let-selectedItem="selectedItem">
            <ul class="breadcrumb">
              <li><a href="#">Home</a></li>
              <li><a href="#">Pictures</a></li>
              <li><a href="#">Summer 15</a></li>
              <li>Italy</li>
            </ul>
          </ng-template>
        </w3c-breadcrumbs>
      `,
      props: {}
    };
  });
