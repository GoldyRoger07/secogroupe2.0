import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language-service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements AfterViewInit{

  @ViewChild("siteHeader")
  siteHeader!: ElementRef


  @Input()
  menuAutoHide = true

  currentLanguage$!: Observable<string>

  constructor(private languageService:LanguageService){
    this.currentLanguage$ = languageService.currentLanguage$
  }

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
     const value = ($event.target as HTMLSelectElement).value;
     this.languageService.updateCurrentLanguage(value)
  }

  translate(currentLanguage:string,language1:string,language2:string){
    return this.languageService.translate(currentLanguage,language1,language2)
  }

}
