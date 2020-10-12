import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        check(value?:boolean): SpongeHelpers | boolean;
    }
}
const check = function (value?:boolean){
    if (typeof value === 'boolean') {
        this.selected.forEach((elm)=>{
            elm.checked = value;
        })
        return this;
    } else {
        return this.selected[0].checked;
    }
}
SpongeHelpers.prototype.check = check;