import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userForm: any;
  compareValue?: any
  updatedValues = {};
  constructor(private formBuilder: FormBuilder) {
    this.compareValue = {
      name: 'yaxa',
      email: 'yaxa@gmail.com',
      profile: 'hello yaxa'
    };
    this.userForm = this.formBuilder.group({
      name: [this.compareValue.name, Validators.required],
      email: [this.compareValue.email, Validators.required],
      profile: [this.compareValue.profile, [Validators.required, Validators.minLength(10)]]
    });
  }
  save() {
    console.log("save called");
    this.updatedValues = this.getUpdatedValues(this.userForm, this.compareValue);
    //return updatedValues; 
    console.log("updatedValues",this.updatedValues);
  }

  getUpdatedValues = (form: any, compareValue?: any) => {
    let updatedValues = {};
    Object.keys(form.controls)
      .forEach((key) => {
        const currentControl = form.controls[key];
        if (currentControl.dirty) {
          if (currentControl.controls) {
            let controls = this.getUpdatedValues(currentControl, compareValue[key]);
            if (Object.entries(controls).length != 0) {
              updatedValues[key] = controls;
            }
          } else if (! compareValue) {
            updatedValues[key] = currentControl.value;
          }
          else if (compareValue[key] != currentControl.value){
            updatedValues[key] = currentControl.value;
          }
        }
    });
    return updatedValues;
}
}




