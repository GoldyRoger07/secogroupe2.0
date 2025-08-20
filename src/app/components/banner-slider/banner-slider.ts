import { AfterViewInit, Component, Input } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'banner-slider',
  imports: [],
  templateUrl: './banner-slider.html',
  styleUrl: './banner-slider.scss'
})
export class BannerSlider implements AfterViewInit{

  @Input()
  imgUrls = [
    // 'images/portailBG.jpg',
    'images/portailBG2.jpg',
    // 'images/vecteezy/vecteezy_handshake.jpg'

  ]

  ngAfterViewInit(): void {
      const swiper1 = new Swiper('#bannerSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        },
        effect:'fade'

        // If we need pagination
       

        // Navigation arrows
        

        // And if we need scrollbar
        
      });
  }
}
