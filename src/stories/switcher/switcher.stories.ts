import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Switcher", module)
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
        <style>
        // .toggle-btn {
        //   display: inline-block;
        //   outline: 0;
        //   width: 4em;
        //   height: 2em;
        //   position: relative;
        //   cursor: pointer;
        //   user-select: none;
        //   background: #fbfbfb;
        //   border-radius: 2em;
        //   padding: 2px;
        //   transition: all 0.4s ease;
        //   border: 1px solid #e8eae9;
        // }
        // .toggle-btn:focus::after,
        // .toggle-btn:active::after {
        //   box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1),
        //     0 4px 0 rgba(0, 0, 0, 0.08),
        //     inset 0px 0px 0px 1.5px #9c9c9c;
        // }
        // .toggle-btn::after {
        //   left: 0;
        //   position: relative;
        //   display: block;
        //   content: '';
        //   width: 50%;
        //   height: 100%;
        //   border-radius: 2em;
        //   background: #fbfbfb;
        //   transition: all 0.3s
        //       cubic-bezier(0.175, 0.885, 0.32, 1.275),
        //     padding 0.3s ease, margin 0.3s ease;
        //   box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1),
        //     0 4px 0 rgba(0, 0, 0, 0.08);
        // }
        // .toggle-btn.toggle-btn-on::after {
        //   left: 50%;
        // }
        // .toggle-btn.toggle-btn-on {
        //   background: #86d993;
        // }
        // .toggle-btn.toggle-btn-on:active {
        //   box-shadow: none;
        // }
        // .toggle-btn.toggle-btn-on:active::after {
        //   margin-left: -0.8em;
        // }
        // .toggle-btn:active::after {
        //   padding-right: 0.8em;
        // }
        // .toggle-input {
        //   display: none;
        // }
        </style>
          <Switcher>
          <button switcherToggleOn>On</button>
          <button switcherToggleOff>Off</button>
          </Switcher>

          <Switcher>
            <ng-template let-status="status">
              <span switcherToggleOn [style.borderBottom]="status === 'on' ? '2px solid red' : '1px solid'">On</span>
              <button switcherToggleOff [style.borderBottom]="status === 'off' ? '2px solid red' : '1px solid'">Off</button>
            </ng-template>
          </Switcher>
        </ThemeProvider>
      `,
      props: {}
    };
  });
