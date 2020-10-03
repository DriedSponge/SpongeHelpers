import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        removeClass(classes:string | Array<string>): SpongeHelpers;
    }
}
var removeClass = function removeClass(classes){
    if(typeof classes === 'string'){
        this.selected.forEach((element) => {
            element.classList.remove(classes);
        })
    }else if(classes instanceof Array){
        classes.forEach((cls) => {
            this.selected.forEach((element) => {
                element.classList.remove(cls);
            })
        })
    }
    return this;
}
SpongeHelpers.prototype.removeClass = removeClass;