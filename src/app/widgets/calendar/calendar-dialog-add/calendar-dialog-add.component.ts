import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { parseLocalDate } from '../../../utils/calendar.util';
import { MatIconModule } from '@angular/material/icon';
import { CALENDAR_OFFICE_REASONS } from '../../../models/calendar-event.model';

@Component({
  selector: 'app-calendar-dialog-add',
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatIconModule,
    MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-dialog-add.component.html',
  styleUrl: './calendar-dialog-add.component.css',
})
export class CalendarDialogAddComponent {

  private readonly dialogRef = inject<MatDialogRef<CalendarDialogAddComponent>>(MatDialogRef);
  protected readonly dialogData = inject<{start: string; end: string, team: string[], reasons: string[]}>(MAT_DIALOG_DATA);

  protected readonly addEventForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    reason: new FormControl<string>('', Validators.required),
    start: new FormControl<Date | null>(new Date(parseLocalDate(this.dialogData.start)), Validators.required),
    end: new FormControl<Date | null>(new Date(parseLocalDate(this.dialogData.end)), Validators.required),
    comments: new FormControl<string>('')
  });

  // Safe RxJS: Convert the form's valueChanges observable into a signal.
  // This avoids manual .subscribe() and handles cleanup automatically.
  private readonly nameValue = toSignal(
    this.addEventForm.controls.name.valueChanges,
    { initialValue: this.addEventForm.controls.name.value }
  );

  // Computed signal that dynamically updates the dropdown options.
  protected readonly reasons = computed(() => 
    this.nameValue() === 'Everyone' 
      ? CALENDAR_OFFICE_REASONS 
      : this.dialogData.reasons
  );

  protected addEvent() {
    if (this.addEventForm.valid) {
      this.dialogRef.close(this.addEventForm.getRawValue());
    }
  }

  protected closeDialog() {
    this.dialogRef.close();
  }
}
