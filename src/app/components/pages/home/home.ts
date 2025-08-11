import { Component, OnInit } from '@angular/core';
import {Header} from '../../header/header';
import { Footer } from '../../footer/footer';
import { MySlider } from '../../my-slider/my-slider';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FilialeService } from '../../../services/filiale-service';
import { Filiale } from '../../../models/Filiale';

@Component({
  selector: 'app-home',
  imports: [Header,Footer,MySlider,RouterLink],
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

  
}
