import { Component, OnInit, ViewChild } from '@angular/core';
import { NbSelectComponent } from '@nebular/theme';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild('selectNebular', {read: NbSelectComponent, static: true}) selectNebular!: NbSelectComponent;
  listSelect: string[] = ['value 1', 'value 2', 'value 3'];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.selectNebular.selectionModel);
  }

}
