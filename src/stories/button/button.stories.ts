import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Button", module)
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
        <ThemeProvider>
          <Button [variant]="variant">Button</Button>
        </ThemeProvider>
      `,
      props: {
        variant: select(
          "variant",
          ["default", "red", "blue", "gray", "black"],
          "gray"
        )
      }
    };
  });
