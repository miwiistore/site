import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
    selector: 'app-shop-left-sidebar-page-one',
    templateUrl: './shop-left-sidebar-page-one.component.html',
    styleUrls: ['./shop-left-sidebar-page-one.component.scss']
})
export class ShopLeftSidebarPageOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    minValue: number = 200;
    maxValue: number = 700;
    options: Options = {
        floor: 0,
        ceil: 1000,
        translate: (value: number, label: LabelType): string => {
            switch (label) {
                case LabelType.Low:
                return '<b>Min price:</b> $' + value;
                case LabelType.High:
                return '<b>Max price:</b> $' + value;
                default:
                return '$' + value;
            }
        }
    };

}