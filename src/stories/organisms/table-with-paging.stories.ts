import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Organisms", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("Table with paging", () => {
    return {
      template: `
      <ui-box w="600px">
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
              <td table-cell>Azizi</td>
              <td table-cell>34</td>
            </tr>
          </tbody>
          <tfoot table-footer [customStyle]="tfoot">
          <tr>
            <td table-cell colspan="2">
                <ui-box [customStyle]="box" w="100%">
                    <m-pagination></m-pagination>
                </ui-box>
            </td>
          </tr>
          </tfoot>
        </table>
    </ui-box>
      `,
      props: {
        handleCellClick: e => console.log(e),
        box: `
            display: flex;
            justify-content: center;
            align-items: center;
        `
      }
    };
  });
