import { Component } from '@angular/core';
import { Banner } from '../../banner/banner';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { MyCard } from "../../my-card/my-card";
import { CardDetails } from '../../../models/CardDetails';
import { RouterLink } from '@angular/router';
import { EulenSlider } from "../../eulen/eulen-slider/eulen-slider";
import { Section1 } from "../../planned/section1/section1";
import { Section2 } from "../../planned/section2/section2";
import { EulenSection1 } from "../../eulen/eulen-section1/eulen-section1";
import { EulenSection2 } from "../../eulen/eulen-section2/eulen-section2";
import { EulenSection3 } from "../../eulen/eulen-section3/eulen-section3";
import { BannerSlider } from "../../banner-slider/banner-slider";
import { HeroSection } from "../../hss/hero-section/hero-section";
import { LanguageService } from '../../../services/language-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ContactSection } from "../../eulen/contact-section/contact-section";

@Component({
  selector: 'app-portail',
  imports: [CommonModule, Header, Footer, MyCard, RouterLink, EulenSlider, Section1, Section2, EulenSection1, EulenSection2, EulenSection3, BannerSlider, HeroSection, ContactSection],
  templateUrl: './portail.html',
  styleUrl: './portail.scss'
})
export class Portail {

  currentLanguage$!: Observable<string>
   
  pays = ['usa', 'canada', 'haiti', 'bahamas','bresil'];
  cardDetails = new CardDetails(4,[
    {
      title: "United States",
      description: "Description de la filiale 1",
      cover: "images/usa_map.png",
      link: "/filiale/1"
    },{
      title: "Canada",
      description: "Description de la filiale 1",
      cover: "images/canada_map.png",
      link: "/filiale/1"
    },{
      title: "Haïti",
      description: "Description de la filiale 1",
      cover: "images/haiti_map.png",
      link: "/filiale/1"
    },{
      title: "Bahamas",
      description: "Description de la filiale 1",
      cover: "images/bahamas_map.png",
      link: "/filiale/1"
    },{
      title: "Bresil",
      description: "Description de la filiale 1",
      cover: "images/bresil_map.png",
      link: "/filiale/1"
    }

    
  ])

  clientsLogo = [
    "images/clients/brana_logo.png",
    "images/clients/grand_geneva_logo.jpeg",
    "images/clients/Grand-Sierra-Resort-Logo.png",
    "images/clients/Kalahari_Resorts_Horiz_Blue-768x257.avif",
    "images/clients/logo_barbancourt.jpg",
    "images/clients/logo_best_western.png",
    "images/clients/logo_boomtown_resort.webp",
    "images/clients/logo_camelback_resort.png",
    "images/clients/logo_chulavista.png",
    "images/clients/logo_dells_resort.png",
    "images/clients/logo_fne.webp",
    "images/clients/logo_ihsi.png",
    "images/clients/logo_marriott.png",
    "images/clients/logo_monarch_resort.png",

    "images/clients/brana_logo.png",
    "images/clients/grand_geneva_logo.jpeg",
    "images/clients/Grand-Sierra-Resort-Logo.png",
    "images/clients/Kalahari_Resorts_Horiz_Blue-768x257.avif",
    "images/clients/logo_barbancourt.jpg",
    "images/clients/logo_best_western.png",
    "images/clients/logo_boomtown_resort.webp",
    "images/clients/logo_camelback_resort.png",
    "images/clients/logo_chulavista.png",
    "images/clients/logo_dells_resort.png",
    "images/clients/logo_fne.webp",
    "images/clients/logo_ihsi.png",
    "images/clients/logo_marriott.png",
    "images/clients/logo_monarch_resort.png",
  ]

  constructor(private languageService:LanguageService){
    this.currentLanguage$ = languageService.currentLanguage$
  }

  translate(currentLanguage:string,language1:string,language2:string){
    return this.languageService.translate(currentLanguage,language1,language2)
  }
}