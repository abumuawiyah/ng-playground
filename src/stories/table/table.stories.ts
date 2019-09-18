import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Molecules/Table", module)
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
        <table m-table>
          <thead table-header>
            <tr table-header-row>
              <th table-header-cell>Name</th>
              <th table-header-cell>Age</th>
            </tr>
          </thead>
          <tbody table-body>
            <tr table-row>
              <td table-cell (click)="handleCellClick($event)">Azizi</td>
              <td table-cell>34</td>
            </tr>
            <tr table-row>
              <td table-cell>Azizi</td>
              <td table-cell>34</td>
            </tr>
            <tr table-row>
              <td table-cell>34</td>
            </tr>
          </tbody>
        </table>
      `,
      props: {
        handleCellClick: e => console.log(e)
      }
    };
  });
