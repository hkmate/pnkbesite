import { Injectable } from '@angular/core';
import {Language} from '../language/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

    private static readonly LANGUAGE_STORAGE_KEY = 'app-theme';

    constructor() {
    }

    public init(): void {
        // TODO...
    }

    public setLang(newLang: string): void {
        console.debug('New lang selected: ', newLang);
        // TODO set theme...
        localStorage.setItem(LanguageService.LANGUAGE_STORAGE_KEY, newLang);
    }

    public getLangOptions(): Array<Language> {
        return Object.values(Language);
    }

    public setupDefault(): void {
        // TODO...
    }
}
