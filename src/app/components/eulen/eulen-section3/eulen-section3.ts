import { AfterViewInit, Component } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'eulen-section3',
  imports: [],
  templateUrl: './eulen-section3.html',
  styleUrl: './eulen-section3.scss'
})
export class EulenSection3 implements AfterViewInit{

    ngAfterViewInit(): void {
        let cargarSwiperClientes = () => {
                var swiper = new Swiper("#swiper_clientes", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    pagination: {
                        el: "#swiper_clientes .swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        400: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        }
                    }
                });
            }

            cargarSwiperClientes()

    }
}
