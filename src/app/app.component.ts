import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('list1', [
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
    ]),
    trigger('list2', [
      state('in', style({
          opacity: 1,
          transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes(
          [
            style({
              opacity: 0,
              transform: 'translateX(-100px)',
              offset: 0
            }),
            style({
              opacity: 0.5,
              transform: 'translateX(-50px)',
              offset: 0.3
            }),
            style({
              opacity: 0,
              transform: 'translateX(-100px)',
              offset: 1
            })
          ]
        ))
      ]),
      transition('* => void', [
        group([animate(3000,
          style({
            color: 'red'
        }))
        ,
        animate(6000,
          style({
            opacity: 0,
            transform: 'translateX(100px)'
        }))])
      ])
    ]),
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          transform: 'translateX(0)'
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px)'
        })
      ),
      transition('normal => highlighted', animate(300))
      // transition('highlighted <=> normal', animate(800)) back and forth rule
    ]),
    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'red',
          'border-radius': '0',
          transform: 'translateX(0) scale(1)'
        })
      ),
      state(
        'highlighted',
        style({
          'background-color': 'blue',
          'border-radius': '0',
          transform: 'translateX(100px) scale(1)'
        })
      ),
      state(
        'shrunken',
          style({
            'background-color': 'green',
            'border-radius': '0',
            transform: 'translateX(0) scale(0.5)'
          })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDN6ln7aVt1o3kV2XTZKe54nI5mGp33GKE',
      authDomain: 'gimpan-116f7.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state === 'normal'
      ? (this.state = 'highlighted')
      : (this.state = 'normal');
    this.wildState === 'normal'
      ? (this.wildState = 'highlighted')
      : (this.wildState = 'normal');
  }

  onShrink() {
    this.wildState === 'normal'
      ? (this.wildState = 'shrunken')
      : (this.wildState = 'normal');
  }

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }
}
