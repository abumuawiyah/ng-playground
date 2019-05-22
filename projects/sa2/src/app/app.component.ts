import { Component, OnInit } from "@angular/core";
// import jss from "jss";

// import { styles, red, green, blue } from './app.component.styles';
import { CustomersStore } from "./core/store/customers.store";
import { Customer } from "./core/store/customer";
import { Observable } from "rxjs";

interface sheet {
  readonly classes: Object;
  readonly update: Function;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public classes: Object;

  public onRedChanged: Function;
  public onGreenChanged: Function;
  public onBlueChanged: Function;

  constructor(private customersStore: CustomersStore) {}

  addCustomer() {
    const cust = {
      id: Date.now(),
      name: "Fred",
      address: {
        street: Date.now() + " Main St.",
        city: "Phoenix",
        state: "AZ",
        zip: "85258"
      }
    };
    this.customersStore.add(cust);
  }

  public ngOnInit(): void {
    // const sheet: sheet = jss.createStyleSheet(styles, { link: true }).attach()
    // this.classes = sheet.classes
    // this.onRedChanged = this.createChangeFunction(sheet, red);
    // this.onGreenChanged = this.createChangeFunction(sheet, green);
    // this.onBlueChanged = this.createChangeFunction(sheet, blue);
    // sheet.update({
    //   area: { backgroundColor: red }
    // })

    // Use Observable<Customer> if desired
    // this.customers$ = this.customersStore.stateChanged;

    // Can subscribe to stateChanged of store
    this.customersStore.stateChanged.subscribe(state => {
      console.log("app", state);
    });
  }

  private createChangeFunction(
    sheet: sheet,
    color: string
  ): (event: Event) => void {
    return (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
      // sheet.update({
      //   area: { backgroundColor: color }
      // })
    };
  }
}
