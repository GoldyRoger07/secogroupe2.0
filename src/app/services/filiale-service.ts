import { Injectable } from '@angular/core';
import { Filiale } from '../models/Filiale';
import { FilialePays } from '../models/FilialePays';
import { CardDetails } from '../models/CardDetails';
import { FilialeDetails } from '../models/FilialeDetails';

@Injectable({
  providedIn: 'root'
})
export class FilialeService {

  filialeDetails: FilialeDetails[] = [{
    title: 'A simple title',
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  }]

  secoTechDetails: FilialeDetails[] = [
    {
      title: 'Building Maintenance',
      description: 'With over a decade of experience, QS consistently provides exceptional Janitorial, Security, Concierge, and Maintenance services to clients nationwide.',
      slogan: 'Our company focus is to diligently serve the Corporate Sector by providing specialized facilities management services.'
    },
    {
      title: '',
      description: 'QS boasts a dedicated team of full-time, in-house recruiters employing a specialized methodology to ensure the acquisition of personnel with the necessary skill sets.'
    },
    {
      title: '',
      description: 'Our continuous training initiatives are thoughtfully designed to enhance the productivity and dependability of our associates, setting them apart from competitors.'
    },
    {
      title: '',
      description: 'Our management team is well-versed in delivering professional oversight and supervision to all field associates, guaranteeing our clients receive services of the utmost quality.'
    },
    {
      title: '',
      description: 'Our company focus is to diligently serve the Corporate Sector by providing specialized facilities management services'
    }
  ]

  filiales:Filiale[] = [
      new Filiale('seco_securite','Seco Security','Security','',['images/new/bg_seco_securite.jpg'],'images/logos/seco_secu_logo.png','','images/logos/security_services.png',new CardDetails(2,
        [
         
          {title: 'Security Guard'},
          {title: 'Surveillance'},
          {title: 'Maintenance of security systems'},
          {title: 'Security consultancy'},
          {title: 'Intellegence security'}
        ]),[{
        title: 'Seco Security',
        description: `Dedicated security service provider offering licensed temporary and permanent guards tailored to your unique needs, ensuring employee and asset safety.
         Partnerships with 20+ properties nationwide, specializing in Residential, Commercial, Medical Facilities, Distribution Centers, Special Events, Government, and Education.

         Commitment to collaborative partnerships, alleviating recruitment, hiring, and management burdens, while delivering exceptional service and desired outcomes. 
         Expertise in tailored solutions, nationwide operations, and quality partnerships, leveraging extensive field experience.
         
         Comprehensive management support, competitive rates, and streamlined operations through our Corporate Support Team, handling recruitment, HR, payroll, insurance, benefits, and training.
         
         Experienced leaders ready to evaluate your needs and provide a tailored Proposal of Services. 
         Let QS Security be your trusted solutions partner for efficient, professional, and secure operations.
         `,
         slogan: 'Our company focus is to diligently serve the Corporate Sector by providing specialized Security & Loss Prevention Services.'
      }]),
      new Filiale('optimal_staffing_services','Optimal Staffing Services','Staffing','',['https://i0.wp.com/careerical.com/wp-content/uploads/2025/02/Top-Recruitment-Agencies-in-Italy-Providing-Jobs-with-Visa-Sponsorship.jpg?fit=1200%2C628&ssl=1'],'images/logos/seco_secu_logo.png','','images/logos/staffing_services.png',new CardDetails(2),
      [
        {
        title: 'Staffing Service',
        description: `With a 13-year legacy as a premier recruitment and staffing leader, we excel
at connecting businesses with top talent and providing comprehensive staffing
solutions. Our team of human capital advocates meticulously matches skills
and aspirations to ensure optimal results in every hire we make. Passion and
precision drive our seamless outsourcing and staffing solutions, culminating in
the success of both businesses and individuals.`,
        slogan: 'Our company focus is to diligently serve the Corporate Sector by providing specialized Staffing and recruiting Services.'
      },
      {
        title: '',
        description: `
        Our expert team thrives in diverse industries, consistently delivering exceptional
candidates to drive growth and innovation. Through transformative partnerships,
we harmonize ambitions with our staffing and outsourcing expertise, creating a
powerful synergy that elevates businesses to new heights. 
        `
      },
      {
        title: '',
        description: `
        Unlock your company’s full potential through strategic hires and comprehensive
staffing strategies that align with your objectives. Empower success and foster
growth with the Quality Staffing and Outsourcing Solution. Experience a journey
of endless possibilities as we work together to meet your staffing needs and
achieve your business goals.
        `
      },
      {
        title: '',
        description: `
        Count on us as your dedicated partner for exceptional hires and staffing solutions
that make a difference. 
        `
      },

    ]),
      new Filiale('housekeeping_services','Housekeeping Services','Housekeeping','',['https://plus.unsplash.com/premium_photo-1682097409792-354d4d544753?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],'images/logos/seco_secu_logo.png','','images/logos/house_keeping.png',new CardDetails(2),[{
        title: 'Hospitality And Cleaning Services',
        description: `We are a premier provider of top-notch hospitality solutions tailored
to elevate your guest experience. With a strong focus on quality,
our comprehensive range of Turnkey Hospitality services includes
housekeeping, laundry and maintenance.`,
        slogan: `Our Company focus is to diligently serve the Corporate Sector
by providing specialized Housekeeping & Commercial Cleaning
Services. `
      },
      {
        title: '',
        description: 'Our dedicated team is committed to enhancing the ambiance and comfort of your establishment. From luxury, hotels, and resorts to bustling casinos, hospitals, and serene retirement facilities, we cater to a diverse clientele that demands nothing but excellence. With a proven track record, we ensure immaculate public areas, well-maintained facilities, and a seamless guest journey'
      }]),
      new Filiale('concierge_services','Concierge Services','Concierge','',['https://media.cnn.com/api/v1/images/stellar/prod/111005061730-concierge-ritz.jpg?q=w_4000,h_3000,x_0,y_0,c_fill'],'images/logos/seco_secu_logo.png','','images/logos/concierges_services.png',new CardDetails(2),this.filialeDetails),
      new Filiale('janitorial_services','Janitorial Services','Janitorial','',['https://plus.unsplash.com/premium_photo-1661662877086-4007ebf0378e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],'images/logos/seco_secu_logo.png','','images/logos/janitorial_services.png',new CardDetails(2),this.filialeDetails),
      new Filiale('seco_tech','Seco Tech','Building Maintenance','',['images/new/bg_seco_tech.jpg'],'images/logos/seco_tech_logo.png','images/logos/seco_tech_white_logo.png','images/logos/building_maintenance.png',new CardDetails(3),this.secoTechDetails),
      new Filiale('seco_agro_industries','Seco Agro Industries','','',[
        'images/vecteezy/cover_seco_agro.jpg',
        'images/vecteezy/cover_seco_agro1.jpeg',
        'images/vecteezy/cover_seco_agro2.jpg',
        'images/vecteezy/cover_seco_agro3.jpg',
        'images/vecteezy/cover_seco_agro4.jpg',
        'images/vecteezy/cover_seco_agro5.jpg',
        'images/vecteezy/cover_seco_agro6.jpg',
        'images/vecteezy/cover_seco_agro7.jpg',
        'images/vecteezy/cover_seco_agro8.jpg',
        'images/vecteezy/cover_seco_agro9.jpg',
        'images/vecteezy/cover_seco_agro10.jpg',
        'images/vecteezy/cover_seco_agro11.jpg',
        'images/vecteezy/cover_seco_agro12.jpg',
        'images/vecteezy/cover_seco_agro13.jpg',
        'https://plus.unsplash.com/premium_photo-1661962573121-d4c317caf908?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],'images/logos/seco_agro_white_logo.png','images/logos/seco_agro_white_logo.png','fa-solid fa-seedling',new CardDetails(4),this.filialeDetails),
      new Filiale('seco_energy_co','Seco Energy CO','','',['images/vecteezy/cover_seco_energy.jpg','images/vecteezy/cover_seco_energy1.JPG','images/vecteezy/cover_seco_energy2.JPG','https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],'','','fa-solid fa-bolt',new CardDetails(5),this.filialeDetails),
      new Filiale('seco_distributors','Seco Distributors','','',['https://www.plugandtrack.com/wp-content/uploads/2022/05/Normes-stockage-distribution-medicaments-e1652099964737.jpg'],'images/logos/seco_distributors_logo.png','images/logos/seco_distributors_white_logo.png','fa-solid fa-truck',new CardDetails(1),this.filialeDetails),
      new Filiale('mass_funds','Mass Funds','','',['images/new/bg_mass_funds.jpg'],'','','fa-solid fa-sack-dollar',new CardDetails(2),this.filialeDetails),
      new Filiale('mass_assurance','Mass Assurance','','',['images/new/bg_mass_assurance.jpg'],'','','fas fa-user-shield',new CardDetails(4),this.filialeDetails),
      new Filiale('boyo_airways','Boyo Airways','','',['images/new/bg_seco_boyo.avif'],'images/logos/boyo_airways_white_logo.png','images/logos/boyo_airways_white_logo.png','fa-solid fa-plane-departure',new CardDetails(5),this.filialeDetails),
      new Filiale('seco_univers_construction','Seco Univers Construction','','',['images/vecteezy/cover_seco_construction.jpg','images/vecteezy/cover_seco_construction1.jpg','images/vecteezy/cover_seco_construction2.JPG','images/new/bg_seco_univers_construction.jpg'],'images/logos/seco_univers_construction_white_logo.png','images/logos/seco_univers_construction_white_logo.png','fa-solid fa-person-digging',new CardDetails(1),this.filialeDetails),
  ]

  filialesPays: FilialePays[] = [
    new FilialePays('usa','seco_securite'),
    new FilialePays('usa','seco_tech'),
    new FilialePays('usa','optimal_staffing_services'),
    new FilialePays('usa','housekeeping_services'),
    new FilialePays('usa','janitorial_services'),
    new FilialePays('usa','concierge_services'),
    new FilialePays('canada','seco_securite'),
    new FilialePays('canada','seco_tech'),
    new FilialePays('canada','seco_energy_co'),
    new FilialePays('canada','seco_agro_industries'),
    new FilialePays('bahamas','seco_securite'),
    new FilialePays('bahamas','seco_tech'),
    new FilialePays('bahamas','seco_energy_co'),
    new FilialePays('bahamas','seco_agro_industries'),
    new FilialePays('haiti','seco_securite'),
    new FilialePays('haiti','seco_tech'),
    new FilialePays('haiti','seco_energy_co'),
    new FilialePays('haiti','seco_agro_industries'),
    new FilialePays('haiti','seco_distributors'),
    new FilialePays('haiti','boyo_airways'),
    new FilialePays('haiti','mass_assurance'),
    new FilialePays('haiti','mass_funds'),
    new FilialePays('haiti','seco_univers_construction'),
    new FilialePays('bresil','seco_distributors'),
    new FilialePays('bresil','boyo_airways'),
    new FilialePays('bresil','mass_assurance'),
    new FilialePays('bresil','mass_funds'),
    new FilialePays('bresil','seco_univers_construction')

  ]

  
  // document.documentElement.style.setProperty('--body-bg', 'url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')

  getFilialeByNameAndPays(name:string,pays:string):Filiale|null{
    let result = null
    this.filialesPays.forEach(fP => {
        if(pays === fP.pays && name === fP.filialeName){
          result = this.getFilialeByName(fP.filialeName)
          return;
        }
          
    })
    return result
  }

  getFilialesByPays(pays: string): Filiale[] {
    let result: Filiale[] = []
    this.filialesPays.forEach(fP =>{
      if(fP.pays === pays){
          result.push(this.getFilialeByName(fP.filialeName) || new Filiale())
      }
    })
    return result
  }

  getFilialeByName(name: string): Filiale | null{
    let result = null

    this.filiales.forEach(f=>{
      if(f.idName === name)
        result = f
    })

    return result
  }
}
