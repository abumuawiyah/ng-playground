import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

const items = [
  { id: 11, name: "Mr. Nice", disabled: false },
  { id: 12, name: "Narco", disabled: false },
  { id: 13, name: "Bombasto", disabled: true },
  { id: 14, name: "Celeritas", disabled: false },
  { id: 15, name: "Magneta", disabled: false },
  { id: 16, name: "RubberMan", disabled: false },
  { id: 17, name: "Dynama", disabled: true },
  { id: 18, name: "Dr IQ", disabled: false },
  { id: 19, name: "Magma", disabled: false },
  { id: 20, name: "Tornado", disabled: false }
];

storiesOf("Components|Frontal", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("dropdown", () => {
    return {
      template: `
        <ThemeProvider>
          <Dropdown [items]="items"></Dropdown>
        </ThemeProvider>
      `,
      props: {
        items
      }
    };
  })
  .add("bootstrap", () => {
    return {
      template: `
        <ThemeProvider>
          <Box [css]="{width: '170px'}">
            <DropdownBootstrap [items]="items" [variant]="variant"></DropdownBootstrap>
          </Box>
        </ThemeProvider>
      `,
      props: {
        items,
        variant: select(
          "variant",
          ["primary", "secondary", "warning", "success", "info", "danger"],
          "secondary"
        )
      }
    };
  });
