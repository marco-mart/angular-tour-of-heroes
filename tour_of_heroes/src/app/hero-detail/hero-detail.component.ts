import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input()
  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
   ) {}

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }
  
  getHero(): void {
    // Use private members to get Hero
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      // take the hero being emitted and save it
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        // when we are done updating, go back
        .subscribe(() => this.goBack());
    }
  }
}
