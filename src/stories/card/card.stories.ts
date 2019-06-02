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
            <Card [variant]="variant" [css]="{
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
      props: {
        variant: select("variant", ["primary", "secondary"], "primary")
      }
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
            <Card [variant]="variant" [css]="{
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
        handleClick: () => alert(123),
        variant: select("variant", ["primary", "secondary"], "primary")
      }
    };
  })
  .add("video", () => {
    return {
      template: `
        <ThemeProvider>
          <RoleProvider [roles]="roles" [role]="userRole">
            <Box [css]="{
              width: 150,
              height: 150
            }">
              <Card [variant]="variant" [css]="{
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
          </RoleProvider>
        </ThemeProvider>
      `,
      props: {
        variant: select("variant", ["primary", "secondary"], "primary"),
        roles: ["doctor", "nurse", "phamarcist"],
        userRole: select(
          "user role",
          ["doctor", "phamarcist", "patient"],
          "doctor"
        )
      }
    };
  });
