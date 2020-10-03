import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        addClass(classes:string | Array<string>): SpongeHelpers;
    }
}
var addClass = function addClass(classes){
    if(typeof classes === 'string'){
        this.selected.forEach((element) => {
            element.classList.add(classes);
        })
    }else if(classes instanceof Array){
        classes.forEach((cls) => {
            this.selected.forEach((element) => {
                element.classList.add(cls);
            })
        })
    }
    return this;
}
SpongeHelpers.prototype.addClass = addClass;