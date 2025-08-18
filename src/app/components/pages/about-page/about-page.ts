import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { HeroSection } from "../../hss/hero-section/hero-section";
import { StatsSection } from "../../hss/stats-section/stats-section";
import { CardsSection } from "../../hss/cards-section/cards-section";

@Component({
  selector: 'app-about-page',
  imports: [Header, Footer, HeroSection, StatsSection, CardsSection],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {

}
