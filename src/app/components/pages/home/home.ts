import { Component, OnInit } from '@angular/core';
import {Header} from '../../header/header';
import { Footer } from '../../footer/footer';
import { MySlider } from '../../my-slider/my-slider';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header,Footer,MySlider],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{
  
  pays: string = '';
  constructor(private activatedRoute: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
    // this.pays =  this.activatedRoute.snapshot.params['pays']

    

    this.activatedRoute.paramMap.subscribe(params => {
      this.pays = params.get('pays') || "";

      if(!(this.pays === "usa" || this.pays === "canada" || this.pays === "haiti" || this.pays === "bahamas"))
          this.router.navigate(['/']);
      
    });
      
  }

  
}
