import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(passwordField: string, confirmPasswordField: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get(passwordField)?.value;
    const confirmPassword = formGroup.get(confirmPasswordField)?.value;

    if (password !== confirmPassword) {
      formGroup.get(confirmPasswordField)?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      // Se já tinha erro e agora está correto, remove
      if (formGroup.get(confirmPasswordField)?.hasError('passwordMismatch')) {
        formGroup.get(confirmPasswordField)?.setErrors(null);
      }
    }

    return null;
  };
}
