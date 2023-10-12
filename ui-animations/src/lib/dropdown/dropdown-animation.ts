import { animate, state, style, transition, trigger } from '@angular/animations';

const dropdownAnimation = trigger('dropdown', [
  state('hidden', style({
    opacity: 0,
  })),
  state('visible', style({
    opacity: 100
  })),
  transition('hidden => visible', animate('1000ms ease-out')),
  transition('visible => hidden', animate('750ms ease-in'))
]);

export { dropdownAnimation };
