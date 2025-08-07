import { AfterViewInit, Component } from '@angular/core';
// import function to register Swiper custom elements

declare var Swiper: any;

@Component({
  selector: 'eulen-slider',
  imports: [],
  templateUrl: './eulen-slider.html',
  styleUrl: './eulen-slider.scss'
})
export class EulenSlider implements AfterViewInit{
  ngAfterViewInit() {

    setTimeout(()=>{
      const mySection = document.querySelector("#mySection")

      mySection?.classList.toggle("activo")

    },5000)
    // new Swiper('.swiper', {
    //   loop: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   }
    // });

    // new Swiper("#swiper_seccion_banners_1 .swiper", {
    //                             slidesPerView: 1,
                                
    //                             loop: true,
    //                             navigation: {
    //                                 nextEl: "#swiper_seccion_banners_1 .swiper-button-next",
    //                                 prevEl: "#swiper_seccion_banners_1 .swiper-button-prev",
    //                             },
    //                             pagination: {
    //                                 el: "#swiper_seccion_banners_1 .swiper-pagination",
    //                             },
    //  });

     

    let cargarSwiper_seccion_banners1 = () => {
                            var swiper = new Swiper("#swiper_seccion_banners_1 .swiper", {
                                slidesPerView: 1,
                                autoplay: {
                                    delay: 5000,
                                    disableOnInteraction: true,
                                },
                                loop: true,
                                navigation: {
                                    nextEl: "#swiper_seccion_banners_1 .swiper-button-next",
                                    prevEl: "#swiper_seccion_banners_1 .swiper-button-prev",
                                },
                                pagination: {
                                    el: "#swiper_seccion_banners_1 .swiper-pagination",
                                },
                            });
                        }

    cargarSwiper_seccion_banners1()
  }


}
