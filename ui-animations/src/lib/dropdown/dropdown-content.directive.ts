import { Directive, Input, HostBinding } from '@angular/core'

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[dropdownContent]',
  standalone: true,
})
export class DropdownContentDirective {
  @Input() openDropdown!: boolean;

  @HostBinding('@dropdown')
  get animationState() {
    return this.openDropdown ? 'visible' : 'hidden';
  }
}

