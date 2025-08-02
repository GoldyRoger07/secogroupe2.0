import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-slider',
  imports: [],
  templateUrl: './my-slider.html',
  styleUrl: './my-slider.scss'
})
export class MySlider implements AfterViewInit{

  @ViewChild("prev")
  prev!:ElementRef
  
  @ViewChild("next")
  next!:ElementRef

  ngAfterViewInit(): void {
    const slides = document.querySelectorAll(".slide");
    const nextButton = this.next.nativeElement;
    const prevButton = this.prev.nativeElement;
    const auto = true;
    const intervalTime = 5000;
    let slideInterval = 0;

    const nextSlide = () => {
            const current = document.querySelector(".current");
            current?.classList.remove("current");
            if (current?.nextElementSibling) {
                current.nextElementSibling.classList.add("current");
            } else {
                slides[0].classList.add("current");
            }
        };

        const prevSlide = () => {
            const current = document.querySelector(".current");
            current?.classList.remove("current");
            if (current?.previousElementSibling) {
                current.previousElementSibling.classList.add("current");
            } else {
                slides[slides.length - 1].classList.add("current");
            }
        };

        nextButton.addEventListener("click", () => {
            nextSlide();
            if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
            }
        });
        prevButton.addEventListener("click", () => {
            prevSlide();
            if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
            }
        });

        if (auto) {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
  }

}
