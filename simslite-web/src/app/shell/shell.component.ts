import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { dropdownAnimation, DropdownTriggerDirective, DropdownContentDirective, rotateAnimation, RotateDirective } from '@simsapp/angular-animations-lib'

@Component({
  selector: 'simslite-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DropdownTriggerDirective, DropdownContentDirective, RotateDirective],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [dropdownAnimation, rotateAnimation]
})
export class ShellComponent {
  menuUserDropdownOpen = false
}
