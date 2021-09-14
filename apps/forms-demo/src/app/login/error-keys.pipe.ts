import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

export const validationMessages: ValidationErrors = {
  required: 'This field is required.',
  minlength: 'Too Short',
  maxlength: 'Too Long',
  pattern: 'Forbidden Entry',
  email: 'Incorrect email format.',
  date: 'Invalid Date',
  forbiddenName: 'This user is not allowed.',
};

@Pipe({
  name: 'errorKeys',
})
export class ErrorKeysPipe implements PipeTransform {
  transform(errors?: ValidationErrors | null): string[] | undefined {
    if (!errors) {
      return;
    }
    return Object.keys(errors);
  }
}
