import {Component, OnInit} from '@angular/core';
import {Language} from '../../language/language';
import {LanguageService} from '../language.service';
import {ThemeService} from '../theme.service';
import {SelectItem} from 'primeng/api';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    languageOptions: Array<SelectItem>;
    themeOptions: Array<SelectItem>;

    constructor(private langService: LanguageService,
                private themeService: ThemeService) {
    }

    ngOnInit(): void {
        this.initOptions();
    }

    languageChanged(newLang: { value: Language }): void {
        this.langService.setLang(newLang.value);
    }

    themeChanged(newTheme: { value: string }): void {
        this.themeService.setTheme(newTheme.value);
    }

    clearStorage(): void {
        localStorage.clear();
        this.themeService.setupDefault();
        this.langService.setupDefault();
    }

    private initOptions(): void {
        this.languageOptions = this.langService.getLangOptions().map(lang => ({label: lang, value: lang}));
        this.themeOptions = this.themeService.getThemeOptions().map(theme => ({label: theme, value: theme}));
    }
}
