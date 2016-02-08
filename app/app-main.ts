import 'reflect-metadata';
import {Page} from "./decorators/page";
import {App} from "./decorators/app";

//pages 
import { StartPage } from "./pages/startPage/startPage";
import { RegionsPage } from "./pages/regionsPage/regionsPage";
import { RegionPage } from "./pages/regionPage/regionPage";

//providers 
import {Logger} from "./providers/logger";

//nx- control directives 
//some reason you are all not appearing on each page... 
import {NxNav} from "./controls/nav/nav";
import {NxList} from "./controls/list/list";
import {NxListItem} from "./controls/list/list-item";
import {NxHeader} from "./controls/list/header";
import {IonIcon} from "./controls/icons/ion-icon";

import {RouteConfig} from "angular2/router";

//app decorator - save some code writing. Wrapper around @Component
@App({
    selector: "main",
    providers: [Logger],
    directives: [NxList, NxListItem, NxHeader, IonIcon]
})
@RouteConfig([
    { path: "/", component: StartPage, as: "Start" },
    { path: "/regions", component: RegionsPage, as: "Regions" },
    { path: "/regions/:id", component: RegionPage, as: "Region" }
])
export class AppMain {
    constructor(private logger:Logger)
    {
        this.logger.Notify("Main Page Starting");
    }
}