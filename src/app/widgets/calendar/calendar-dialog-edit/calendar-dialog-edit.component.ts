import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { CALENDAR_OFFICE_REASONS, CalendarEvent } from '../../../models/calendar-event.model';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { parseLocalDate } from '../../../utils/calendar.util';

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
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, DatePipe, MatIconModule,
    MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-dialog-edit.component.html',
  styleUrl: './calendar-dialog-edit.component.css',
})
export class CalendarDialogEditComponent {

  protected readonly dialogData = inject<CalendarDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject<MatDialogRef<CalendarDialogEditComponent>>(MatDialogRef);
  protected readonly mode = signal<DialogMode>('view');

  protected readonly editEventForm = new FormGroup({
    name: new FormControl<string>(this.dialogData.event.name, Validators.required),
    reason: new FormControl<string>(this.dialogData.event.reason, Validators.required),
    start_date: new FormControl<Date | null>(new Date(parseLocalDate(this.dialogData.event.start_date)), Validators.required),
    end_date: new FormControl<Date | null>(new Date(parseLocalDate(this.dialogData.event.end_date)), Validators.required),
    comments: new FormControl<string>(this.dialogData.event.comments ?? '')
  });

  // Safe RxJS: Bridge the form value to a signal to drive the dynamic dropdown logic.
  private readonly nameValue = toSignal(
    this.editEventForm.controls.name.valueChanges,
    { initialValue: this.editEventForm.controls.name.value }
  );

  // Computed signal that dynamically updates the dropdown options based on the selected name.
  protected readonly reasons = computed(() => 
    this.nameValue() === 'Everyone' 
      ? CALENDAR_OFFICE_REASONS 
      : this.dialogData.reasons
  );

  protected editMode(): void {
    this.mode.set('edit');
  }

  protected cancelEdit(): void {
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

  protected save(): void {
    if (this.editEventForm.valid) {
      this.dialogRef.close({
        action: 'edit',
        payload: this.editEventForm.getRawValue()
      } as CalendarDialogResult);
    }
  }

  protected delete(): void {
    this.dialogRef.close({
      action: 'delete'
    } as CalendarDialogResult);
  } 

  protected closeDialog(): void {
    this.dialogRef.close();
  }
}
