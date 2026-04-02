import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { CalendarEvent } from '../../../models/calendar-event.model';
import { DatePipe } from '@angular/common';

export type DialogMode = 'view' | 'edit';

export interface CalendarDialogData {
  event: CalendarEvent;
  team: string[];
  reasons: string[]; 
}

export interface CalendarDialogResult {
  action: 'edit' | 'delete';
  payload?: Partial<CalendarEvent>;
}

@Component({
  selector: 'app-calendar-dialog-edit',
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, DatePipe,
    MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './calendar-dialog-edit.component.html',
  styleUrl: './calendar-dialog-edit.component.css',
})
export class CalendarDialogEditComponent {

  public dialogData = inject<CalendarDialogData>(MAT_DIALOG_DATA);
  private dialogRef = inject<MatDialogRef<CalendarDialogEditComponent>>(MatDialogRef);
  readonly mode = signal<DialogMode>('view');

  editEventForm = new FormGroup({
    name: new FormControl<string>(this.dialogData.event.name, Validators.required),
    reason: new FormControl<string>(this.dialogData.event.reason, Validators.required),
    start_date: new FormControl<Date | null>(new Date(this.dialogData.event.start_date), Validators.required),
    end_date: new FormControl<Date | null>(new Date(this.dialogData.event.end_date), Validators.required),
    comments: new FormControl<string>(this.dialogData.event.comments ?? '')
  });

  editMode(): void {
    this.mode.set('edit');
  }

  cancelEdit(): void {
    if (this.mode() === 'edit') {
      this.mode.set('view');
      this.editEventForm.reset({
        name: this.dialogData.event.name,
        reason: this.dialogData.event.reason,
        start_date: new Date(this.dialogData.event.start_date),
        end_date: new Date(this.dialogData.event.end_date),
        comments: this.dialogData.event.comments ?? ''
      });
    } else {
      this.dialogRef.close();
    }
  }

  save(): void {
    if (this.editEventForm.valid) {
      console.log('PTO Request Submitted:', this.editEventForm.value);
      this.dialogRef.close({
        action: 'edit',
        payload: this.editEventForm.getRawValue()
      } as CalendarDialogResult);
    } else {
      console.log('editEventForm Form is invalid');
    }
  }

  delete(): void {
    this.dialogRef.close({
      action: 'delete'
    } as CalendarDialogResult);
  } 

  closeDialog(): void {
    this.dialogRef.close();
  }

}
