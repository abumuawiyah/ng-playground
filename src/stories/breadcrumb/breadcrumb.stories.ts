import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

storiesOf("Components|Breadcrumb", module)
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
          <Breadcrumbs>
            <ng-template let-status="status">
              <nav aria-label="Breadcrumb" class="breadcrumb">
                <ol>
                  <li>
                    <a href="../../">
                      WAI-ARIA Authoring Practices 1.1
                    </a>
                  </li>
                  <li>
                    <a href="../../#aria_ex">
                      Design Patterns
                    </a>
                  </li>
                  <li>
                    <a href="../../#breadcrumb">
                      Breadcrumb Pattern
                    </a>
                  </li>
                  <li>
                    <a href="./index.html" aria-current="page">
                      Breadcrumb Example
                    </a>
                  </li>
                </ol>
              </nav>
            </ng-template>
          </Breadcrumbs>
        </ThemeProvider>
      `,
      props: {}
    };
  });
