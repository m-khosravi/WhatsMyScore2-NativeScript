import { Component, ElementRef, Input, Output, EventEmitter, ContentChildren, ViewChild } from "@angular/core";
import { Logger } from "../../providers/logger";
import { Button } from "ui/button";
import { StackLayout} from "ui/layouts/stack-layout";
import { NxListItem } from "./list-item";

@Component({
    selector:"nx-header",
    template: `
        <StackLayout #item class="nx-header">
            <ng-content></ng-content>
        </StackLayout>
        <StackLayout borderWidth="2" class="nx-header-ext" style="margin-top:-4">
        </StackLayout>
    `,
    styleUrls: ["./controls/list/list.common.css"]
})
export class NxHeader
{
    private container: ElementRef;
    
    constructor(private logger: Logger){
        //this.logger.Notify("add header");
    }
    
    @ViewChild('item') 
    set _setHeaderElement(item: ElementRef){
        this.container = item;
    }
    
    public getNativeElement() : StackLayout {
        if(!this.container){ return ; }
        
        let stackLayout: StackLayout = this.container.nativeElement;
        
        return stackLayout;
    }
}

    // <StackLayout style="background-color:#4d75b8;color:#ffffff;">
    //     <StackLayout class="nx-header" style="padding:16">
    //         <ng-content></ng-content>
    //     </StackLayout>
    // </StackLayout>