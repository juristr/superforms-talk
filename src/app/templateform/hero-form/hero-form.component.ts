import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  hero = {
    name: 'ngWizard',
    age: '??',
    superpower: 'Really Smart'
  };

  constructor() {}

  ngOnInit() {}
}
