import { FormControl } from '@angular/forms';

export interface FormData {
  first_name: FormControl<string | null>,
  last_name: FormControl<string | null>;
  email: FormControl<string | null>;
  age: FormControl<number | null>;
  description: FormControl<string | null>;
}
