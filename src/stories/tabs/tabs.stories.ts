import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { AtomicComponentModule } from "projects/atomic-component/src/projects";
import { CommonModule } from "@angular/common";

storiesOf("Molecules|Tab", module)
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
          <Tabs [activeIndex]=1>
            <TabList>
              <Tab>
                Tab 1
              </Tab>
              <Tab>
                Tab 2
              </Tab>
              <Tab>
                Tab 3
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                Panel 1
              </TabPanel>
              <TabPanel>
                Panel 2
              </TabPanel>
              <TabPanel>
                Panel 3
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ThemeProvider>
      `,
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
