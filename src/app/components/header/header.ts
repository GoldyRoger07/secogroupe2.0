import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements AfterViewInit{

  @ViewChild("siteHeader")
  siteHeader!: ElementRef

  @Input()
  menuAutoHide = true

  

  constructor(private languageService:LanguageService){}

  ngAfterViewInit(): void {
    if(!this.menuAutoHide) return
    const hider = this.siteHeader.nativeElement
    let lastScroll = 0
    window.addEventListener('scroll',()=>{
          let currentScroll = window.pageYOffset

          if(currentScroll<= 0){
              hider.classList.remove("scroll-up")
          }

          if(currentScroll > lastScroll && !hider.classList.contains("scroll-down")){
            hider.classList.remove("scroll-up")
            hider.classList.add("scroll-down")
            // onClickLink()
          }

          if(currentScroll < lastScroll && hider.classList.contains("scroll-down")){
            hider.classList.add("scroll-up")
            hider.classList.remove("scroll-down")
          }
          lastScroll = currentScroll


    })
  }

  onSelect($event: Event) {
    console.log($event)
  }

}
