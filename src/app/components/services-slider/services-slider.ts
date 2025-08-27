import { AfterViewInit, Component, Input } from '@angular/core';


declare var Swiper: any;

@Component({
  selector: 'services-slider',
  imports: [],
  templateUrl: './services-slider.html',
  styleUrl: './services-slider.scss'
})
export class ServicesSlider implements AfterViewInit{

  @Input()
  imgUrls = [
    "images/services/seco_agent_securite_en_bleu.jpg",
    "images/services/seco_agent_securite_en_jaune.jpg",
    "images/services/housekeeping.jpg",
    "images/services/housekeeping13.jpg",
    "images/services/housekeeping12.jpg",
    "images/services/housekeeping14.jpg",
  ]

  ngAfterViewInit(): void {
    const swiper = new Swiper("#services-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      autoplay: {
            delay: 5000,
            disableOnInteraction: true
      },
    });
  }
}
