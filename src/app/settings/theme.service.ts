import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private static readonly THEME_STORAGE_KEY = 'app-theme';
    private static readonly DEFAULT_THEME = 'arya-blue';

    private actualTheme: string;

    constructor() {
        this.init();
    }

    public setTheme(newTheme: string): void {
        console.debug('New theme selected: ', newTheme);
        // TODO set theme...
        localStorage.setItem(ThemeService.THEME_STORAGE_KEY, newTheme);
    }

    public getThemeOptions(): Array<string> {
        return themes;
    }

    public setupDefault(): void {
        // TODO...
    }

    private init(): void {
        this.actualTheme = localStorage.getItem(ThemeService.THEME_STORAGE_KEY) ?? ThemeService.DEFAULT_THEME;
    }
}

// TODO refactor this...
const themes = [
    'arya-blue',
    'arya-green',
    'arya-orange',
    'arya-purple',
    'bootstrap4-dark-blue',
    'bootstrap4-dark-purple',
    'bootstrap4-light-blue',
    'bootstrap4-light-purple',
    'fluent-light',
    'luna-amber',
    'luna-blue',
    'luna-green',
    'luna-pink',
    'md-dark-deeppurple',
    'md-dark-indigo',
    'md-light-deeppurple',
    'md-light-indigo',
    'mdc-dark-deeppurple',
    'mdc-dark-indigo',
    'mdc-light-deeppurple',
    'mdc-light-indigo',
    'nova',
    'nova-accent',
    'nova-alt',
    'rhea',
    'saga-blue',
    'saga-green',
    'saga-orange',
    'saga-purple',
    'vela-blue',
    'vela-green',
    'vela-orange',
    'vela-purple'
];
