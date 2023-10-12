import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[simsappRotate]',
  standalone: true
})
export class RotateDirective {

  @HostBinding('@rotate')
  get animationState() {
    return {
      value: this.rotatedState ? 'rotated' : 'default',
      params: {
        degreesStart: this.degreesStart,
        degreesEnd: this.degreesEnd,
        durationIn: this.durationIn,
        durationOut: this.durationOut,
        easing: this.easing
      }
    };
  }

  @Input() rotatedState = false;

  @Input() degreesStart = 0;

  @Input() degreesEnd = 180;

  @Input() durationIn = 500;

  @Input() durationOut = 500;

  @Input() easing = 'ease-in-out';

}
