import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderModule} from './header/header.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ThemeService} from './theme/theme.service';
import {LanguageService} from './settings/language.service';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

export function serviceFactory(themeService: ThemeService, langService: LanguageService): () => void {
    return () => {
        themeService.init();
        langService.init();
    };
}


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),

        AppRoutingModule,
        HeaderModule
    ],
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: serviceFactory,
        deps: [ThemeService, LanguageService],
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
