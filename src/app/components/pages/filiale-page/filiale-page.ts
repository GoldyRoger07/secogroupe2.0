import { Component, OnInit } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilialeService } from '../../../services/filiale-service';
import { Filiale } from '../../../models/Filiale';
import { MyCard } from "../../my-card/my-card";
import { BannerSlider } from "../../banner-slider/banner-slider";
import { ContactSection } from "../../eulen/contact-section/contact-section";
import { OurClientsSection } from "../../our-clients-section/our-clients-section";
import { Slogan } from "../../slogan/slogan";

@Component({
  selector: 'app-filiale-page',
  imports: [Header, Footer, RouterLink, MyCard, BannerSlider, ContactSection, OurClientsSection, Slogan],
  templateUrl: './filiale-page.html',
  styleUrl: './filiale-page.scss'
})
export class FilialePage implements OnInit{
    pays = ""
    filialeName = ""
    yPos = "0px"

    filiale: Filiale = new Filiale()

    constructor(private activatedRoute: ActivatedRoute,private filialeService: FilialeService){}

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(params => {
          this.pays = params.get('pays') || ""
          this.filialeName = params.get('filiale') || ""

          this.filiale = this.filialeService.getFilialeByNameAndPays(this.filialeName,this.pays) || new Filiale()
          console.log(this.filiale)
          document.documentElement.style.setProperty('--body-bg', `url(${this.filiale.cover}), url(/secogroupe2.0${this.filiale.cover})`);

          switch(this.filialeName){
            case 'concierge_services':
              this.yPos = "-200px"
            break;
          }
      });

      
    }
}
