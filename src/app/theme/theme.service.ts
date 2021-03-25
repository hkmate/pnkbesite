import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private static readonly THEME_STORAGE_KEY = 'app-theme';
    private static readonly DEFAULT_THEME = 'arya-blue';
    private static readonly THEME_DOM_ELEMENT_ID = 'customTheme';

    private actualTheme: string;

    public init(): void {
        this.actualTheme = localStorage.getItem(ThemeService.THEME_STORAGE_KEY) ?? ThemeService.DEFAULT_THEME;
        this.setupTheme();
    }

    public setTheme(newTheme: string): void {
        this.actualTheme = newTheme;
        localStorage.setItem(ThemeService.THEME_STORAGE_KEY, newTheme);
        this.setupTheme();
    }

    public getThemeOptions(): Array<string> {
        return themes;
    }

    public setupDefault(): void {
        this.actualTheme = ThemeService.DEFAULT_THEME;
        this.setupTheme();
    }

    public getActual(): string {
        return this.actualTheme;
    }

    private setupTheme(): void {
        const customThemeLink: HTMLLinkElement = (document.getElementById(ThemeService.THEME_DOM_ELEMENT_ID) as HTMLLinkElement);
        customThemeLink.href = this.createCssUrl();
    }

    private createCssUrl(): string {
        return `themes/${this.actualTheme}/theme.css`;
    }
}

const themes = [
    'arya-blue', 'arya-green', 'arya-orange', 'arya-purple', 'bootstrap4-dark-blue', 'bootstrap4-dark-purple', 'bootstrap4-light-blue',
    'bootstrap4-light-purple', 'fluent-light', 'luna-amber', 'luna-blue', 'luna-green', 'luna-pink', 'md-dark-deeppurple', 'md-dark-indigo',
    'md-light-deeppurple', 'md-light-indigo', 'mdc-dark-deeppurple', 'mdc-dark-indigo', 'mdc-light-deeppurple', 'mdc-light-indigo',
    'nova', 'nova-accent', 'nova-alt', 'rhea', 'saga-blue', 'saga-green', 'saga-orange', 'saga-purple', 'vela-blue', 'vela-green',
    'vela-orange', 'vela-purple'
];
