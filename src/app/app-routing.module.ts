import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'news', loadChildren: () => import('./news/news-routing.module').then(m => m.NewsRoutingModule)},
    {path: 'about-us', loadChildren: () => import('./about-us/about-us-routing.module').then(m => m.AboutUsRoutingModule)},
    {path: 'activities', loadChildren: () => import('./activities/activities-routing.module').then(m => m.ActivitiesRoutingModule)},
    {path: 'members', loadChildren: () => import('./members/members-routing.module').then(m => m.MembersRoutingModule)},
    {path: 'contact', loadChildren: () => import('./contact/contact-routing.module').then(m => m.ContactRoutingModule)},

    {path: '', redirectTo: 'news', pathMatch: 'full'},
    {path: '**', redirectTo: 'news'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
