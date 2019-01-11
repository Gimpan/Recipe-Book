import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

export const Animations = {
  animeTrigger: trigger('animeTrigger', [
    state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300,
        style({
          opacity: 0,
          transform: 'translateX(100px)'
      }))
    ])
  ])
};

