import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactModule} from './contact.module';
import {ContactPageComponent} from './contact-page/contact-page.component';

const routes: Routes = [
    {path: '', component: ContactPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        ContactModule
    ],
    exports: [RouterModule]
})
export class ContactRoutingModule {
}
