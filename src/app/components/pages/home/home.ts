import { Component, OnInit } from '@angular/core';
import {Header} from '../../header/header';
import { Footer } from '../../footer/footer';
import { MySlider } from '../../my-slider/my-slider';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FilialeService } from '../../../services/filiale-service';
import { Filiale } from '../../../models/Filiale';
import { BannerSlider } from "../../banner-slider/banner-slider";
import { EulenSlider } from "../../eulen/eulen-slider/eulen-slider";
import { ServicesSlider } from "../../services-slider/services-slider";
import { MapSection } from "../../map-section/map-section";
import { Section1 } from "../../planned/section1/section1";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, MySlider, RouterLink, BannerSlider, EulenSlider, ServicesSlider, MapSection, Section1],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{
  
  pays: string = '';
  filiales: Filiale[] = []
  constructor(private activatedRoute: ActivatedRoute,private router: Router,private filialeService: FilialeService){}

  ngOnInit(): void {
    // this.pays =  this.activatedRoute.snapshot.params['pays']

    this.activatedRoute.paramMap.subscribe(params => {
      this.pays = params.get('pays') || "";

      if(!(this.pays === "usa" || this.pays === "canada" || this.pays === "haiti" || this.pays === "bahamas" || this.pays === "bresil"))
          this.router.navigate(['/']);
      else
          this.filiales = this.filialeService.getFilialesByPays(this.pays)
      
    });
      
  }

  getImgUrls(){
    let tab = []

    for(let i=0; i<14; i++){
      let imgUrl
      if(i===0)
          imgUrl = "images/services/housekeeping.jpg"
      else
          imgUrl = "images/services/housekeeping"+i+".jpg"

      tab.push(imgUrl)
    }

    return tab
  }

  
}
