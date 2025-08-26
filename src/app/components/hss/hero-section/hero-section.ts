import { Component } from '@angular/core';

@Component({
  selector: 'hss-hero-section',
  imports: [],
  template: `
    <section class="hero-wrapper">
        <div class="box-wrapper">
            <div class="box">
                <h1 style="font-size: 60px; font-weight: 900; color: #262626;">Your vision, Our expertise</h1>
                <p style="color: #575757ff;">Outsourcing support services with SECO to enhance your facilities operations. We provide expert solutions that streamline processes and improve service quality.</p>

            </div>
            <svg  class="ilustracion_comun animar"  width="168.75" height="318.75" viewBox="0 0 269 510" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="stroke-animation" pathLength="1" id="thePath" d="M265 39V4H4V506H264.32V491.071" stroke="#ED2939" stroke-width="8"></path>
            </svg>
        </div>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="695px" height="671px" viewBox="0 0 695 671" style="border:1px solid transparent;  ">
                <defs>
                        <clipPath id="clip-path-right" transform="translate(310.000000, 0.000000)">
                            <path fill="none" d="M384.798555,0 L104,0 C34.6666667,165.333333 5.68434189e-14,305.333333 5.68434189e-14,420 C5.68434189e-14,534.666667 35.6666667,618.333333 107,671 L384.798555,671 C316.402332,608.699318 283.136147,521.044866 285,408.036646 C286.863853,295.028425 320.130038,159.01621 384.798555,0 Z"></path>
                        </clipPath>
                        <clipPath id="clip-path-left" transform="translate(-0.000000, 0.000000)">
                            <path fill="none" d="M384.798555,0 L104,0 C34.6666667,165.333333 0,305.333333 0,420 C0,534.666667 35.6666667,618.333333 107,671 L384.798555,671 C316.402332,608.699318 283.136147,521.044866 285,408.036646 C286.863853,295.028425 320.130038,159.01621 384.798555,0 Z"></path>
                        </clipPath>
                </defs>
                <g style="clip-path:url(#clip-path-right)" id="right" class="start">
                        <image class="double-hero-image-right-03" opacity="0" href="https://f.hubspotusercontent20.net/hubfs/2731727/Website%20Images/What%20We%20Do/what%20we%20do_website_0003_government-IFM-Medical%20Air-20.jpg" width="650" height="671" transform="translate(250 0)"></image>
                        <image class="double-hero-image-right-02" opacity="0" href="images/services/seco_agent_securite_en_bleu.jpg" width="650" height="671" transform="translate(200 0)"></image>
                        <image class="double-hero-image-right-01" href="images/services/seco_agent_securite_en_jaune.jpg" width="650" height="671" transform="translate(200 0)"></image>
                </g>
                <g style="clip-path:url(#clip-path-left)" id="left" class="start">
                        <image class="double-hero-image-left-03" opacity="0" href="https://f.hubspotusercontent20.net/hubfs/2731727/Website%20Images/What%20We%20Do/what%20we%20do_website_0006_education-0E1A3527-202.jpg" width="650" height="671" transform="translate(-150 0)"></image>
                        <image class="double-hero-image-left-02" opacity="0" href="https://f.hubspotusercontent20.net/hubfs/2731727/Website%20Images/What%20We%20Do/what%20we%20do_website_0000_senior%20living-elderly%20patient%20care-v07423588148.jpg" width="650" height="671" transform="translate(-150 0)"></image>
                        <image class="double-hero-image-left-01" href="https://f.hubspotusercontent20.net/hubfs/2731727/Website%20Images/What%20We%20Do/what%20we%20do_website_0005_healthcare-8O2A0426.jpg" width="650" height="671" transform="translate(-150 0)"></image>
                </g>
        </svg>
        
</section>
  `,
  styleUrl: './hero-section.scss'
})
export class HeroSection {

}
