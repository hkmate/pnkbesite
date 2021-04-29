import {Component, Input, OnInit} from '@angular/core';
import {IndividualSupporters} from '../model/supporter';

@Component({
    selector: 'app-individual-supporters-data-view',
    templateUrl: './individual-supporters-data-view.component.html',
    styleUrls: ['./individual-supporters-data-view.component.scss']
})
export class IndividualSupportersDataViewComponent {

    @Input()
    individualSupporters: IndividualSupporters;
}
