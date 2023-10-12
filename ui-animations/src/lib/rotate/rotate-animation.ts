import { animate, state, style, transition, trigger } from '@angular/animations';

export const rotateAnimation = trigger('rotate', [

  state('default', style({
    transform: 'rotate(var(--degreesStart,0deg))'
  }), { params: { degreesStart: "" + 0 + "deg" } }),

  state('rotated', style({
    transform: 'rotate(var(--degreesEnd, -180deg))'
  }), { params: { degreesEnd: "" + -180 + "deg" } }),

  transition('default => rotated', [
    animate('{{durationIn}}ms {{easing}}')
  ]),

  transition('rotated => default', [
    animate('{{durationOut}}ms {{easing}}')
  ])

]);
