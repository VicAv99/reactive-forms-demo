import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.scss'],
})
export class EmployeeContactComponent implements OnInit {
  form!: FormGroup;

  // get addressArray() {
  //   return this.form.get('addresses') as FormArray;
  // }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // ...
      primaryAddress: this.addressGroup(),
      secondaryAddress: this.addressGroup(),
    });
  }

  // ngOnInit(): void {
  //   this.form = this.formBuilder.group({
  //     // ...
  //     addresses: this.formBuilder.array([]),
  //   });
  // }

  // addAddress() {
  //   this.addressArray.push(this.addressGroup());
  // }

  // removeAddress(i: number) {
  //   this.addressArray.removeAt(i);
  // }

  private addressGroup() {
    return this.formBuilder.group({
      address: [],
      city: [],
      state: [],
      zip: [],
    });
  }
}
