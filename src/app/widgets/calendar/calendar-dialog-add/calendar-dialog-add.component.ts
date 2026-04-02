import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { CALENDAR_REASONS, CALENDAR_TEAM } from '../../../models/calendar-event.model';

@Component({
  selector: 'app-calendar-dialog-add',
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule,
    MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './calendar-dialog-add.component.html',
  styleUrl: './calendar-dialog-add.component.css',
})
export class CalendarDialogAddComponent {

  private dialogRef = inject<MatDialogRef<CalendarDialogAddComponent>>(MatDialogRef);
  public dialogData = inject<{start: string; end: string, team: string[], reasons: string[]}>(MAT_DIALOG_DATA);

  readonly team = CALENDAR_TEAM
  readonly reasons = CALENDAR_REASONS

  addEventForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    reason: new FormControl<string>('', Validators.required),
    start: new FormControl<Date | null>(new Date(this.dialogData.start), Validators.required),
    end: new FormControl<Date | null>(new Date(this.dialogData.end), Validators.required),
    comments: new FormControl<string>('')
  });

  addEvent() {
    if (this.addEventForm.valid) {
      console.log('Event Request Submitted:', this.addEventForm.value);
      this.dialogRef.close(this.addEventForm.getRawValue());
    } else {
      console.log('Event Form is invalid');
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
