import {SpongeHelpers} from "../main/main"
declare module "../main/main"{
    export interface SpongeHelpers{
        reset(): SpongeHelpers;
    }
}
const reset = function(){
    this.selected.forEach((element) => {
        if(element.tagName === "form"){
            element.reset();
        }
    })
    return this;
}
SpongeHelpers.prototype.reset = reset;


