import {
    Component,
    ViewContainerRef,
    OnInit,
    HostBinding
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from "../../models/field.interface";
import { FieldConfig } from "../../models/field-config.interface";

@Component({
    selector: "app-form-checkbox",
    templateUrl: "./form-checkbox.component.html",
    styleUrls: ["./form-checkbox.component.scss"]
})
export class FormCheckboxComponent implements Field, OnInit {
    config: FieldConfig;
    group: FormGroup;

    @HostBinding("class")
    classes;
    ngOnInit() {
        this.classes = this.config.classNames;
    }
}
