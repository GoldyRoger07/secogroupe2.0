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

@Component({
  selector: 'app-portail',
  imports: [Banner, Header, Footer, MyCard, RouterLink, EulenSlider, Section1, Section2, EulenSection1, EulenSection2, EulenSection3],
  templateUrl: './portail.html',
  styleUrl: './portail.scss'
})
export class Portail {
  pays = ['usa', 'canada', 'haiti', 'bahamas'];
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
    }

    
  ])

  clientsLogo = [
    "images/clients/brana_logo.png",
    "images/clients/grand_geneva_logo.jpeg",
    "images/clients/Grand-Sierra-Resort-Logo.png",
    "images/clients/Kalahari_Resorts_Horiz_Blue-768x257.avif"

    ,"images/clients/brana_logo.png",
    "images/clients/grand_geneva_logo.jpeg",
    "images/clients/Grand-Sierra-Resort-Logo.png",
    "images/clients/Kalahari_Resorts_Horiz_Blue-768x257.avif"
  ]
}