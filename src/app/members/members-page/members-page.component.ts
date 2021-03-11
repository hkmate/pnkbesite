import {Component, OnInit} from '@angular/core';
import {MemberDescription} from '../model/member-description';
import {MembersService} from '../members.service';

@Component({
    selector: 'app-members-page',
    templateUrl: './members-page.component.html',
    styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit {

    members: Array<MemberDescription>;

    constructor(private memberService: MembersService) {
    }

    ngOnInit(): void {
        this.memberService.getMemberDescriptions().subscribe((value: Array<MemberDescription>) => {
            this.members = value;
        });
    }
}
