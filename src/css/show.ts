import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        show(): SpongeHelpers;
    }
}
var show = function (){
    this.selected.forEach((element) => {
        element.style.display = ' ';
    })
    return this;
}
SpongeHelpers.prototype.show = show;