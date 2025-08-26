import { Injectable } from '@angular/core';
import { Filiale } from '../models/Filiale';
import { FilialePays } from '../models/FilialePays';
import { CardDetails } from '../models/CardDetails';

@Injectable({
  providedIn: 'root'
})
export class FilialeService {

  filiales:Filiale[] = [
      new Filiale('seco_securite','Seco Securité','','',['images/new/bg_seco_securite.jpg'],'images/logos/seco_secu_logo.png','','fas fa-shield-halved',new CardDetails(2)),
      new Filiale('optimal_staffing_services','Optimal Staffing Services','Staffing','',['images/new/bg_seco_securite.jpg'],'images/logos/seco_secu_logo.png','','fas fa-shield-halved',new CardDetails(2)),
      new Filiale('quality_service_hospitality','Quality Service Hospitality','House Keeping','',['images/new/bg_seco_securite.jpg'],'images/logos/seco_secu_logo.png','','fas fa-shield-halved',new CardDetails(2)),
      new Filiale('concierge_services','Concierge Services','','',['images/new/bg_seco_securite.jpg'],'images/logos/seco_secu_logo.png','','fas fa-shield-halved',new CardDetails(2)),
      new Filiale('seco_tech','Seco Tech','Building Maintenance','',['images/new/bg_seco_tech.jpg'],'images/logos/seco_tech_logo.png','images/logos/seco_tech_white_logo.png','fa-solid fa-microchip',new CardDetails(3)),
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
      ],'images/logos/seco_agro_white_logo.png','images/logos/seco_agro_white_logo.png','fa-solid fa-seedling',new CardDetails(4)),
      new Filiale('seco_energy_co','Seco Energy CO','','',['images/vecteezy/cover_seco_energy.jpg','images/vecteezy/cover_seco_energy1.JPG','images/vecteezy/cover_seco_energy2.JPG','https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],'','','fa-solid fa-bolt',new CardDetails(5)),
      new Filiale('seco_distributors','Seco Distributors','','',['https://www.plugandtrack.com/wp-content/uploads/2022/05/Normes-stockage-distribution-medicaments-e1652099964737.jpg'],'images/logos/seco_distributors_logo.png','images/logos/seco_distributors_white_logo.png','fa-solid fa-truck',new CardDetails(1)),
      new Filiale('mass_funds','Mass Funds','','',['images/new/bg_mass_funds.jpg'],'','','fa-solid fa-sack-dollar',new CardDetails(2)),
      new Filiale('mass_assurance','Mass Assurance','','',['images/new/bg_mass_assurance.jpg'],'','','fas fa-user-shield',new CardDetails(4)),
      new Filiale('boyo_airways','Boyo Airways','','',['images/new/bg_seco_boyo.avif'],'images/logos/boyo_airways_white_logo.png','images/logos/boyo_airways_white_logo.png','fa-solid fa-plane-departure',new CardDetails(5)),
      new Filiale('seco_univers_construction','Seco Univers Construction','','',['images/vecteezy/cover_seco_construction.jpg','images/vecteezy/cover_seco_construction1.jpg','images/vecteezy/cover_seco_construction2.JPG','images/new/bg_seco_univers_construction.jpg'],'images/logos/seco_univers_construction_white_logo.png','images/logos/seco_univers_construction_white_logo.png','fa-solid fa-person-digging',new CardDetails(1)),
  ]

  filialesPays: FilialePays[] = [
    new FilialePays('usa','seco_securite'),
    new FilialePays('usa','seco_tech'),
    new FilialePays('usa','optimal_staffing_services'),
    new FilialePays('usa','quality_service_hospitality'),
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
