
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[dropdownTrigger]',
  standalone: true,
})
export class DropdownTriggerDirective {
  @Output() openDropdown = new EventEmitter<void>();

  @HostListener('click')
  toggleOpen() {
    this.openDropdown.emit();
  }
}

