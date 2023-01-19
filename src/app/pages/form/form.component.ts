import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService, NbGlobalPhysicalPosition, NbSelectComponent, NbToastrService } from '@nebular/theme';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild('selectNebular', {read: NbSelectComponent, static: true}) selectNebular!: NbSelectComponent;
  listSelect: string[] = ['value 1', 'value 2', 'value 3'];

  constructor(private dialogService: NbDialogService, private toastrService: NbToastrService) {
  }

  ngOnInit(): void {
    console.log(this.selectNebular.selectionModel);
  }

  // open(dialog: TemplateRef<any>): void {
  open(): void {
    this.dialogService.open(DialogComponent, {
      context:
        {
          title: 'Este es titulo',
          data: 'Contenido'
        }
    })
    this.toastrService.success('Se abrio el dialog', 'Información ', {position: NbGlobalPhysicalPosition.TOP_RIGHT})
  }
}
