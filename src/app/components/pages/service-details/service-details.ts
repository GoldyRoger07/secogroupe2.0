import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilialeService } from '../../../services/filiale-service';
import { Header } from "../../header/header";
import { BannerSlider } from "../../banner-slider/banner-slider";
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-service-details',
  imports: [Header, BannerSlider, RouterLink, Footer],
  templateUrl: './service-details.html',
  styleUrl: './service-details.scss'
})
export class ServiceDetails implements OnInit{
  pays = ""
  filialeName = ""
  service = ""

  constructor(private activatedRoute: ActivatedRoute, private filialeService: FilialeService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
        this.pays = params.get('pays') as string
        this.filialeName = params.get('filiale') as string
        this.service = params.get('service') as string
    })
  }

}
