import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'top-button',
  imports: [],
  templateUrl: './top-button.html',
  styleUrl: './top-button.scss'
})
export class TopButton implements AfterViewInit{
  
  @ViewChild("moveTop")
  moveTop!:ElementRef

  ngAfterViewInit(): void {
    // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = () => {
            this.scrollFunction()
        };

       

        // When the user clicks on the button, scroll to the top of the document
         

  }

  topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
  }

  scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                this.moveTop.nativeElement.style.display = "block";
            } else {
                this.moveTop.nativeElement.style.display = "none";
            }
  }

}
