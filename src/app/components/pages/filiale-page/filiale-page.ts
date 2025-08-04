import { Component, OnInit } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilialeService } from '../../../services/filiale-service';
import { Filiale } from '../../../models/Filiale';
import { MyCard } from "../../my-card/my-card";

@Component({
  selector: 'app-filiale-page',
  imports: [Header, Footer, RouterLink, MyCard],
  templateUrl: './filiale-page.html',
  styleUrl: './filiale-page.scss'
})
export class FilialePage implements OnInit{
    pays = ""
    filialeName = ""

    filiale: Filiale = new Filiale()

    constructor(private activatedRoute: ActivatedRoute,private filialeService: FilialeService){}

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(params => {
          this.pays = params.get('pays') || ""
          this.filialeName = params.get('filiale') || ""

          this.filiale = this.filialeService.getFilialeByNameAndPays(this.filialeName,this.pays) || new Filiale()
          console.log(this.filiale)
          document.documentElement.style.setProperty('--body-bg', `url(${this.filiale.cover}), url(/secogroupe2.0${this.filiale.cover})`);

      });
    }
}
