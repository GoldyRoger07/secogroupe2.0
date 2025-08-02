import { Component } from '@angular/core';
import { Banner } from '../../banner/banner';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { MyCard } from "../../my-card/my-card";
import { CardDetails } from '../../../models/CardDetails';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portail',
  imports: [Banner, Header, Footer, MyCard, RouterLink],
  templateUrl: './portail.html',
  styleUrl: './portail.scss'
})
export class Portail {
  pays = ['usa', 'canada', 'haiti', 'bahamas'];
  cardDetails = new CardDetails(4,[
    {
      title: "United States",
      description: "Description de la filiale 1",
      cover: "/images/usa_map.png",
      link: "/filiale/1"
    },{
      title: "Canada",
      description: "Description de la filiale 1",
      cover: "/images/canada_map.png",
      link: "/filiale/1"
    },{
      title: "Haiti",
      description: "Description de la filiale 1",
      cover: "/images/haiti_map.png",
      link: "/filiale/1"
    },{
      title: "Bahamas",
      description: "Description de la filiale 1",
      cover: "/images/bahamas_map.png",
      link: "/filiale/1"
    }

    
  ])
}
