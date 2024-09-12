import { Component } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
  powers = [
    'Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'
  ];

  model: Hero = {
    id: 69,
    name: 'Dr. IQ',
    power: this.powers[0],
    alterEgo: 'Chuck Overstreet'
  };

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = {
      id: 42,
      name: '',
      power: ''
    };
  }

}
