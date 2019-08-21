import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

const palette = [
  {
    color: "purple",
    code: {
      hex: "rebeccapurple"
    }
  },
  {
    color: "orange",
    code: {
      hex: "tomato"
    }
  },
  {
    color: "red",
    code: {
      hex: " #f44336"
    }
  },
  {
    color: "green",
    code: {
      hex: "#4caf50"
    }
  }
];

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
  .add("Color Palette", () => {
    return {
      template: `
        <w3c-theme-provider>
          <w3c-box [customStyle]="container">
            <w3c-box *ngFor="let item of palette" [customStyle]="paletteItem(item)">
                <span>{{item.color}}</span>
            </w3c-box>
          </w3c-box>
        </w3c-theme-provider>
      `,
      props: {
        palette,
        container: `
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
        `,
        paletteItem: props =>
          `
            height: 50px;
            background-color: ${props.code.hex};
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            flex-direction: column;
          `
      }
    };
  });
