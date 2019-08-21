import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  forwardRef,
  Inject
} from "@angular/core";
import { css } from "emotion";
import { ThemeProviderComponent } from "../../theme/theme-provider/theme-provider.component";

@Component({
  selector: "w3c-table",
  template: `
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
    </table>
  `
})
export class TableComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() customStyle: string;

  constructor() // @Inject(forwardRef(() => ThemeProviderComponent))
  // public themeProvider: ThemeProviderComponent
  {
    // console.log(this.themeProvider);
  }

  ngOnInit() {
    const { customStyle } = this;

    this.className = css`
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
      & td,
      & th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      & tr:nth-child(even) {
        background-color: #dddddd;
      }
      ${customStyle}
    `;
  }

  ngAfterContentInit() {}
}
