import { Component, OnInit } from "@angular/core";
import { CustomersStore } from "../core/store/customers.store";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  constructor(private customersStore: CustomersStore) {}

  ngOnInit() {
    this.customersStore.stateChanged.subscribe(state => {
      console.log("customer", state);
    });
  }
}
