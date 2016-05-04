import { Control } from "../../decorators/control";
import { LocationStrategy } from '@angular/common';
import { EventEmitter, ViewChildren, ViewChild, ElementRef, HostListener, Host, Directive, Component, ContentChild, TemplateRef, ViewContainerRef} from '@angular/core';
import { Logger} from "../../providers/logger";
import { IonIcon,NavIcon} from "../icons/ion-icon";
import { Observable, Subscription, Subject} from 'rxjs/Rx';
import { Router, Instruction,  } from '@angular/router';
import { Location } from '@angular/common'
@Control({
    selector:"nx-nav-back",
    //create 1 row template; 3 columns; 2 for the icons on the sides
    template: `
        <ion-icon item-left icon="ion-chevron-left" (tap)="back($event)"></ion-icon>
    `,
    directives: [IonIcon,NavIcon],
    providers: [],
})
export class NxNavBack {
    
    public constructor(
        private router: Router, 
        private location: Location,
        private element: ElementRef,
        private logger: Logger) {
            
        //this.logger.Notify("nx-nav-back");
    }

    public back()
    {
        this.logger.Notify("Back");
        
        this.location.back();
        
    }
       
    public menuSelected = new Subject<boolean>();
       
    public tapWrapper = (args: any) => {
        this.logger.Notify("tap clicked on menu");
        this.menuSelected.next(true);
        
    };
        
    private ngAfterViewInit()
    {
        
    }
}