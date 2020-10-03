import {SpongeHelpers} from "../main/main"
declare module "../main/main"{
    export interface SpongeHelpers{
        html(html:string): SpongeHelpers;
    }
}
const html = function(html:string){
    this.selected.forEach((element) => {
        element.innerHTML = html;
    })
    return this;
}
SpongeHelpers.prototype.html = html;


