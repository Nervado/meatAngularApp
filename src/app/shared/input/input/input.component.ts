import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterContentInit
} from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "mt-input-container",
  templateUrl: "./input.component.html"
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  // ref para input
  @ContentChild(NgModel) model: NgModel;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error(
        "Esse componente precisa ser usado com uma diretiva ngModel"
      );
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
