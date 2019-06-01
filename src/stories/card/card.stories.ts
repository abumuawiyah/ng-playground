import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

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
  .add("default", () => {
    return {
      template: `
        <ThemeProvider>
          <Box [css]="{
            width: 150,
            height: 150
          }">
            <Card [variant]="'primary'" [css]="{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 8
            }">
              <CardContent>
                Content
              </CardContent>
            </Card>
          </Box>
        </ThemeProvider>
      `,
      props: {}
    };
  })
  .add("buttons", () => {
    return {
      template: `
        <ThemeProvider>
          <Box [css]="{
            width: 150,
            height: 150
          }">
            <Card [variant]="'secondary'" [css]="{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 8
            }">
              <CardContent>
                <button (click)="handleClick()">Button</button>
              </CardContent>
            </Card>
          </Box>
        </ThemeProvider>
      `,
      props: {
        handleClick: () => alert(123)
      }
    };
  })
  .add("video", () => {
    return {
      template: `
        <ThemeProvider>
          <Box [css]="{
            width: 150,
            height: 150
          }">
            <Card [variant]="'secondary'" [css]="{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 8
            }">
              <CardContent>
                <iframe width="100" height="100"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
                </iframe>
              </CardContent>
            </Card>
          </Box>
        </ThemeProvider>
      `,
      props: {}
    };
  });
