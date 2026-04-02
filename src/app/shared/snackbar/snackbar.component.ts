import { Component, inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBarLabel } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar',
    template: `<span class="calendar-snackbar" matSnackBarLabel>
                {{snackbarContent}}
             </span>
             `,
    styleUrl: './snackbar.component.css',
    imports: [MatSnackBarLabel]
})

export class SnackBarComponent {
  snackbarContent = inject(MAT_SNACK_BAR_DATA);
  snackBarRef = inject(MatSnackBarRef);
}