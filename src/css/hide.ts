import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        hide(): SpongeHelpers;
    }
}
var hide = function (){
    this.selected.forEach((element) => {
        element.style.display = 'none';
    })
    return this;
}
SpongeHelpers.prototype.hide = hide;