import {SpongeHelpers} from "../main/main"
declare module "../main/main"{
    export interface SpongeHelpers{
        formReset(): SpongeHelpers;
    }
}
const formReset = function(){
    this.selected.forEach((element) => {
        if(element.tagName === "form"){
            element.reset();
        }
    })
    return this;
}
SpongeHelpers.prototype.formReset = formReset;


