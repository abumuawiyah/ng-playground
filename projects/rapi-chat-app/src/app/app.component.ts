import { Component, OnInit } from "@angular/core";
import jss from "jss";

import { styles, red, green, blue } from "./app.component.styles";

interface Sheet {
  readonly classes: object;
  readonly update: any;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public classes: object;

  public onRedChanged: any;
  public onGreenChanged: any;
  public onBlueChanged: any;

  public ngOnInit(): void {
    const sheet: Sheet = jss.createStyleSheet(styles, { link: true }).attach();
    this.classes = sheet.classes;
    this.onRedChanged = this.createChangeFunction(sheet, red);
    this.onGreenChanged = this.createChangeFunction(sheet, green);
    this.onBlueChanged = this.createChangeFunction(sheet, blue);
    sheet.update({
      area: { backgroundColor: red }
    });
  }

  private createChangeFunction(
    sheet: Sheet,
    color: string
  ): (event: Event) => void {
    return (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
      sheet.update({
        area: { backgroundColor: color }
      });
    };
  }
}
