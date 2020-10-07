import {SpongeHelpers} from "../main/main"
declare module "../main/main"{
    export interface SpongeHelpers{
        text(text:string): SpongeHelpers;
    }
}
const text = function(text:string){
    this.selected.forEach((element) => {
        element.textContent = text;
    })
    return this;
}
SpongeHelpers.prototype.text = text;


