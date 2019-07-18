import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Table", module)
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
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        tr:nth-child(even) {
          background-color: #dddddd;
        }
</style>
<table>
<tr>
  <th>Company</th>
  <th>Contact</th>
  <th>Country</th>
</tr>
<tr>
  <td>Alfreds Futterkiste</td>
  <td>Maria Anders</td>
  <td>Germany</td>
</tr>
<tr>
  <td>Centro comercial Moctezuma</td>
  <td>Francisco Chang</td>
  <td>Mexico</td>
</tr>
<tr>
  <td>Ernst Handel</td>
  <td>Roland Mendel</td>
  <td>Austria</td>
</tr>
<tr>
  <td>Island Trading</td>
  <td>Helen Bennett</td>
  <td>UK</td>
</tr>
<tr>
  <td>Laughing Bacchus Winecellars</td>
  <td>Yoshi Tannamuri</td>
  <td>Canada</td>
</tr>
<tr>
  <td>Magazzini Alimentari Riuniti</td>
  <td>Giovanni Rovelli</td>
  <td>Italy</td>
</tr>
</table>
        </ThemeProvider>
      `,
      props: {}
    };
  });
