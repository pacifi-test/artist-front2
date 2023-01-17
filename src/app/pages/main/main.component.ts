import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormData } from '../../interfaces/form.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public form !: FormGroup<FormData>;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group<FormData>({
      first_name: fb.control<string | null>(null, Validators.required),
      last_name: fb.control<string | null>(null, Validators.required),
      email: fb.control<string | null>(null, Validators.required),
      age: fb.control<number | null>(null),
      description: fb.control<string | null>(null)
    })
  }

  ngOnInit(): void {
  }

  public send(): void {
    console.log(this.form?.value);
    alert(`Bienvenido ${this.form?.value.first_name} `)
  }

}
