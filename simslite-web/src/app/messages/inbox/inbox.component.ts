import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { dropdownAnimation, DropdownContentDirective, DropdownTriggerDirective } from '@simslite/ui-animations'


@Component({
  selector: 'simslite-inbox',
  standalone: true,
  imports: [CommonModule, DropdownContentDirective, DropdownTriggerDirective],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  animations: [dropdownAnimation]
})
export class InboxComponent {
  isOpen = false;
  inboxDropdownOpen = false;
  userDropdownOpen = false;

}
