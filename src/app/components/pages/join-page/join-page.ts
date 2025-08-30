import { Component } from '@angular/core';
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import { BannerSlider } from "../../banner-slider/banner-slider";
import { RouterLink } from '@angular/router';
import { ContactSection } from "../../eulen/contact-section/contact-section";
import { OurClientsSection } from "../../our-clients-section/our-clients-section";

@Component({
  selector: 'app-join-page',
  imports: [Header, Footer, BannerSlider, RouterLink, ContactSection, OurClientsSection],
  templateUrl: './join-page.html',
  styleUrl: './join-page.scss'
})
export class JoinPage {

}
