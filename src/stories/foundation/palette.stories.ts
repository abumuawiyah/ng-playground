import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

const palette = {
  uiBlueDarker: "#071d40",
  uiBlueDark: "#0d3880",
  uiBlue: "#184da8",
  uiBlueLight: "#2765cf",
  uiBlueLighter: "#e60278",
  uiPink: "#157e00",
  uiGreen: "#5bc252",
  uiGreenLight: "#9556b7",
  uiPurple: "#00a5ad",
  uiTeal: "#f57c00",
  uiOrange: "#ffc600",
  uiYellow: "#fffce3",
  // Grays
  uiBlack: "#1c1c1c",
  uiCharcoal: "#404040",
  uiMidGrayDark: "#747474",
  uiMidGrayMedium: "#898989"
};

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
        <ui-theme-provider>
          <ui-box [customStyle]="container" *ngIf="palette">
            <ui-box *ngFor="let k of keys" display="flex" flexDirection="column" alignItems="center">
              <ui-box [customStyle]="paletteItem(palette[k])">
              </ui-box>
              <ui-box>{{k}}</ui-box>
              <ui-box>{{palette[k]}}</ui-box>
            </ui-box>
          </ui-box>
        </ui-theme-provider>
      `,
      props: {
        palette,
        keys: Object.keys(palette),
        container: `
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
        `,
        paletteItem: color =>
          `
            width: 50px;
            height: 50px;
            background-color: ${color};
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            flex-direction: column;
          `
      }
    };
  });
