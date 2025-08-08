import { AfterViewInit, Component } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'eulen-section2',
  imports: [],
  templateUrl: './eulen-section2.html',
  styleUrl: './eulen-section2.scss'
})
export class EulenSection2 implements AfterViewInit{

  ngAfterViewInit(): void {
      let cargarSwiperSubservicios1 = () => {
                                var swiper = new Swiper("#swiper_subservicios_1 .swiper", {
                                    slidesPerView: 1.2,
                                    spaceBetween: 20,
                                    autoplay: {
                                        delay: 3000,
                                        disableOnInteraction: true,
                                    },
                                    loop: true,
                                    navigation: {
                                        nextEl: "#swiper_subservicios_1 .swiper-button-next",
                                        prevEl: "#swiper_subservicios_1 .swiper-button-prev",
                                    },
                                    breakpoints: {
                                        500: {
                                            slidesPerView: 4,
                                        }
                                    }
                                });
                            }
                            cargarSwiperSubservicios1()
  }
}
