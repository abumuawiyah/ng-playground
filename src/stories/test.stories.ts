import { action } from "@storybook/addon-actions";
// import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { storiesOf, moduleMetadata, configure } from "@storybook/angular";

import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import {
  DynamicFormModule,
  DynamicFormComponent,
  FieldConfig,
  AtomicComponentModule
} from "projects/atomic-component/src/projects";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-item1",
  template: `
    <ThemeProvider>
      <lib-dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)"
      >
      </lib-dynamic-form>
      <Box
        [justifyContent]="'space-between'"
        [alignItems]="'center'"
        [css]="{
          color: 'red',
          fontWeight: 'bold'
        }"
      >
        Test
      </Box>
      {{ form.valid }}
      {{ form.value | json }}
    </ThemeProvider>
  `
})
class Item1Component implements AfterViewInit {
  @Input() in1;
  @Input() in2;
  constructor() {}

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: "input",
      label: "Full name",
      name: "name",
      placeholder: "Enter your name",
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: "select",
      label: "Favourite Food",
      name: "food",
      options: ["Pizza", "Hot Dogs", "Knakworstje", "Coffee"],
      placeholder: "Select an option",
      validation: [Validators.required]
    },
    {
      label: "Submit",
      name: "submit",
      type: "button"
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled("submit", !previousValid);
      }
    });

    this.form.setDisabled("submit", true);
    this.form.setValue("name", "Todd Motto");
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}

storiesOf("Dynamic form", module)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserModule, DynamicFormModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("default", () => ({
    component: Item1Component,
    props: {
      // in1: { a: "a" },
      // in2: [1, 2, 3, 4]
    }
  }));
