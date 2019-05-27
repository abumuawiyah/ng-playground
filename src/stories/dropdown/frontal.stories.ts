import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { AtomicComponentModule } from "projects/atomic-component/src/projects";
import { CommonModule } from "@angular/common";
import { FrontalModule } from "frontal";

export interface Hero {
  id: number;
  name: string;
  disabled: boolean;
}

export const heroes: Hero[] = [
  { id: 11, name: "Mr. Nice", disabled: false },
  { id: 12, name: "Narco", disabled: false },
  { id: 13, name: "Bombasto", disabled: true },
  { id: 14, name: "Celeritas", disabled: false },
  { id: 15, name: "Magneta", disabled: false },
  { id: 16, name: "RubberMan", disabled: false },
  { id: 17, name: "Dynama", disabled: true },
  { id: 18, name: "Dr IQ", disabled: false },
  { id: 19, name: "Magma", disabled: false },
  { id: 20, name: "Tornado", disabled: false }
];

export const filter = (query: string) =>
  heroes.filter(({ name }) =>
    name.toLowerCase().startsWith(query.toLowerCase())
  );

export const toString = (hero: Hero) => hero.name;

export const toJson = (hero: Hero) => (hero ? JSON.stringify(hero) : "");

storiesOf("Components|Frontal", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, FrontalModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("dropdown", () => {
    return {
      template: `
        <ThemeProvider>
            <frontal [itemToString]="heroToString">
                <ng-template
                  let-value="inputValue"
                  let-isOpen="isOpen"
                  let-highlightedIndex="highlightedIndex"
                  let-selectedItem="selectedItem"
                >

                  <label frontalLabel>Select your hero:</label>
                  <input type="text" frontalInput/>

                  <ul *ngIf="isOpen" frontalList>
                      <li *ngFor="let hero of heroes; let index=index;" frontalItem
                      [value]="hero" [class.highlight]="highlightedIndex === index">
                      {{ hero.name }}
                      </li>
                  </ul>

                  <div *ngIf="isOpen && heroes.length === 0">
                      No heroes found...
                  </div>

                  <h4>Selected hero:</h4>
                  <pre>{{ selectedItem | json }}</pre>

                </ng-template>
            </frontal>
        </ThemeProvider>
      `,
      props: {
        heroes,
        trackHeroById: (index: number, hero: Hero) => {
          return hero.id;
        },
        heroToString: (hero: Hero) => {
          return toString(hero);
        },
        heroToJson: (hero: Hero) => {
          return toJson(hero);
        },
        onSelect: (hero: Hero) => {
          alert(`${hero.name} selected!`);
        }
      }
    };
  })
  .add("auto-complete", () => {
    return {
      template: `
        <ThemeProvider>
           on progress
        </ThemeProvider>
      `,
      props: {}
    };
  })
  .add("customize", () => {
    return {
      template: `
        <ThemeProvider>
           on progress
        </ThemeProvider>
      `,
      props: {}
    };
  });
