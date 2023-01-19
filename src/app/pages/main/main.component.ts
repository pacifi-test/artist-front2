import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormData } from '../../interfaces/form.interface';
import { ArtistService } from './services/artist.service';
import { NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public form !: FormGroup<FormData>;

  constructor(
    private fb: FormBuilder,
    private artistService: ArtistService,
    private toastrService: NbToastrService
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
    this.artistService.save({
      first_name: this.form.value.first_name,
      last_name: this.form.value.last_name,
      email: this.form.value.email,
      age: this.form.value.age,
      description: this.form.value.description
    })
      .subscribe(data => {
        console.log(data);
      })
  }


  showToast() {

    this.toastrService.show('This is super toast message', `This is toast number: `);
  }


}
