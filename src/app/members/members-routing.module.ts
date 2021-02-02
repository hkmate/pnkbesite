import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MembersModule} from './members.module';
import {MembersPageComponent} from './members-page/members-page.component';

const routes: Routes = [
    {path: '', component: MembersPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        MembersModule
    ],
    exports: [RouterModule]
})
export class MembersRoutingModule {
}
