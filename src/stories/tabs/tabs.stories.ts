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
        <ThemeProvider>
          <w3c-tabs [activeIndex]=1>
            <w3c-tab-list>
              <w3c-tab>
                Tab 1
              </w3c-tab>
              <w3c-tab>
                Tab 2
              </w3c-tab>
              <w3c-tab>
                Tab 3
              </w3c-tab>
            </w3c-tab-list>
            <w3c-tab-panels>
              <w3c-tab-panel>
                Panel 1
              </w3c-tab-panel>
              <w3c-tab-panel>
                Panel 2
              </w3c-tab-panel>
              <w3c-tab-panel>
                Panel 3
              </w3c-tab-panel>
            </w3c-tab-panels>
          </w3c-tabs>
        </ThemeProvider>
      `,
      props: {}
    };
  });
