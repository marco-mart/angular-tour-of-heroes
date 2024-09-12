import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { Subscriber } from 'rxjs';
import { MessageService } from '../message.service';
import { STRING_TYPE } from '@angular/compiler';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService
  ) {}

  ngOnInit(): void { 
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) {
      return;
    }

    this.heroService.addHero({ name: heroName } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(id: Number): void {
    // Remove hero from curr heroes array
    this.heroes = this.heroes.filter(h => h.id !== id);

    // Delete hero
    this.heroService.deleteHero(id as number)
      .subscribe();
  }
}
