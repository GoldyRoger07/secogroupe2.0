import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguageSource$:BehaviorSubject<string> = new BehaviorSubject<string>('eng')
  currentLanguage$:Observable<string> = this.currentLanguageSource$.asObservable()


  updateCurrentLanguage(language:string){
    this.currentLanguageSource$.next(language)
  }

  translate(currentLanguage:string,language1:string,language2:string){
    return currentLanguage === 'eng'?language1:language2
  }
}
