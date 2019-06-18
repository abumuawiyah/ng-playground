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
            <ng-template let-selectedItem="selectedItem">
              <nav aria-label="Breadcrumb" class="breadcrumb">
                <ol breadcrumbList>
                  <li [item]="{value: 1}" breadcrumbItem>
                    <a>
                      WAI-ARIA Authoring Practices 1.1 {{selectedItem.value}}
                    </a>
                  </li>
                  <li [item]="{value: 2}" breadcrumbItem>
                    <a>
                      Design Patterns
                    </a>
                  </li>
                  <li [item]="{value: 3}" breadcrumbItem>
                    <a>
                      Breadcrumb Pattern
                    </a>
                  </li>
                  <li [item]="{value: 4}" breadcrumbItem>
                    <a aria-current="page">
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
