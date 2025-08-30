import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { HeroSection } from "../../hss/hero-section/hero-section";
import { StatsSection } from "../../hss/stats-section/stats-section";
import { CardsSection } from "../../hss/cards-section/cards-section";
import { BannerSlider } from "../../banner-slider/banner-slider";
import { ContactSection } from "../../eulen/contact-section/contact-section";
import { RouterLink } from '@angular/router';
import { OurClientsSection } from "../../our-clients-section/our-clients-section";

@Component({
  selector: 'app-about-page',
  imports: [RouterLink, Header, Footer, HeroSection, StatsSection, CardsSection, BannerSlider, ContactSection, OurClientsSection],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {

}
