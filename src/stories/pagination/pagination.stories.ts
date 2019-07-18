import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Pagination", module)
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
        .pagination {
          display: inline-block;
        }
        .pagination a {
          color: black;
          float: left;
          padding: 8px 16px;
          text-decoration: none;
        }
        .pagination a.active {
          background-color: #4CAF50;
          color: white;
        }
        .pagination a:hover:not(.active) {background-color: #ddd;}
</style>
<div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a class="active" href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
        </ThemeProvider>
      `,
      props: {}
    };
  });
