import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'workspace-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    alert(JSON.stringify(this.form.value, null, 2));
  }

  reset() {
    this.form.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      aboutMe: '',
      devStack: [''],
    });
  }
}
