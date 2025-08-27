import { AfterViewInit, Component, Input } from '@angular/core';
// import function to register Swiper custom elements

declare var Swiper: any;

@Component({
  selector: 'eulen-slider',
  imports: [],
  templateUrl: './eulen-slider.html',
  styleUrl: './eulen-slider.scss'
})
export class EulenSlider implements AfterViewInit{

  @Input()
  imgUrls = [
    'uploads/sites/2/2023/01/sostenibilidad-1.jpg',
    'uploads/sites/2/2022/11/idi.jpg',
    'uploads/sites/2/2023/01/banner-personas.png'
  ]

  ngAfterViewInit() {

    // setTimeout(()=>{
    //   const mySection = document.querySelector("#mySection")

    //   mySection?.classList.toggle("activo")

    // },5000)
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

    // Sélection de l'élément à observer
    const mySection = document.querySelector("#mySection")

    setInterval(()=> mySection?.classList.toggle("activo"),3700)

    // // Création de l'observer
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       console.log('L’élément est visible dans le viewport');
    //       // Par exemple, tu peux ajouter une classe
    //       // mySection?.classList.toggle("activo")
    //       entry.target.classList.add('activo');

    //       // Optionnel : arrêter l'observation si ce n’est plus nécessaire
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // }, {
    //   threshold: 0.5 // Déclenchement quand 50% de l'élément est visible
    // });

    // // Démarrer l'observation
    // observer.observe(mySection as any);

  }


}
