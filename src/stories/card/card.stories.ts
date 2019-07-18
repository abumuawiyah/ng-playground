import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";
import { css } from "emotion";

storiesOf("Components|Card", module)
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
        <style>
        .card {
          /* Add shadows to create the "card" effect */
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
          width: 92%;
    max-width: 300px;
        }
        /* On mouse-over, add a deeper shadow */
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        /* Add some padding inside the card container */
        .container {
          padding: 2px 16px;
        }
        h4 {
          font-family: "Segoe UI",Arial,sans-serif;
    font-weight: 400;
    margin: 10px 0;
        }
        </style>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
          <div class="container">
            <h4><b>John Doe</b></h4>
            <p [ngClass]="test">Architect & Engineer</p>
          </div>
        </div>
        </ThemeProvider>
      `,
      props: {
        test: css`
          color: rebeccapurple;
          text-decoration: underline;
        `
      }
    };
  });
