import {Injectable} from '@angular/core';
import {Language} from './language';
import {TranslateService} from '@ngx-translate/core';
import {I18nObject} from './i18n-object';
import {isNotNullOrUndefined} from '../util';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private static readonly LANGUAGE_STORAGE_KEY = 'app-language';


    constructor(private translateService: TranslateService) {
    }

    public init(): void {
        this.translateService.addLangs(Object.values(Language));
        this.setupDefault();
    }

    public setLang(newLang: string): void {
        this.translateService.use(newLang);
        localStorage.setItem(LanguageService.LANGUAGE_STORAGE_KEY, newLang);
    }

    public getLangOptions(): Array<Language> {
        return Object.values(Language);
    }

    public getActual(): Language {
        return this.translateService.currentLang.toUpperCase() as Language;
    }

    public setupDefault(): void {
        const storedLang: Language = this.loadStoredLanguage();
        if (isNotNullOrUndefined(storedLang)) {
            this.translateService.use(storedLang);
            return;
        }
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|hu/) ? browserLang.toUpperCase() : Language.EN);
    }

    public resolveI18nValue<T>(value: I18nObject<T>): T {
        const actual = this.translateService.currentLang;
        const browserLang = this.translateService.getBrowserLang().toUpperCase();
        const langPriorities = [actual, browserLang, Language.HU, Language.EN];

        for (const lang of langPriorities) {
            if (isNotNullOrUndefined(value[actual])) {
                return value[actual];
            }
        }
        return null;
    }

    private loadStoredLanguage(): Language {
        return localStorage.getItem(LanguageService.LANGUAGE_STORAGE_KEY) as Language;
    }
}
