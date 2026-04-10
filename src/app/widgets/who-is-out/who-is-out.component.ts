import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { CalendarService } from '../../services/calendar.service';
import { colorForName } from '../../utils/calendar.util';

@Component({
  selector: 'app-who-is-out',
  imports: [MatChipsModule],
  templateUrl: './who-is-out.component.html',
  styleUrl: './who-is-out.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoIsOutComponent {
  private readonly calendarService = inject(CalendarService)
  colorForName = colorForName;
  todaysEntries = this.calendarService.todaysEntries;
  isMonToThu = this.calendarService.isMonToThu;
}
