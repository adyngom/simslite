import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'simslite-ui-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-animations.component.html',
  styleUrls: ['./ui-animations.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAnimationsComponent {}
