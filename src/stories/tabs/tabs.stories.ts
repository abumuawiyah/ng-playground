import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Molecules/Tab", module)
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
      template: `
        <m-tabs [activeIndex]=1>
          <m-tab-list>
            <m-tab>
              Tab 1
            </m-tab>
            <m-tab>
              Tab 2
            </m-tab>
            <m-tab>
              Tab 3
            </m-tab>
          </m-tab-list>
          <m-tab-panels>
            <m-tab-panel>
              Panel 1
            </m-tab-panel>
            <m-tab-panel>
              Panel 2
            </m-tab-panel>
            <m-tab-panel>
              Panel 3
            </m-tab-panel>
          </m-tab-panels>
        </m-tabs>
      `,
      props: {}
    };
  });
