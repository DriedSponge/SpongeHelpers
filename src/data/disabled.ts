import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        disabled(value?:boolean): SpongeHelpers | boolean;
    }
}
const disabled = function (value?:boolean){
    if (typeof value === 'boolean') {
        this.selected.forEach((elm)=>{
            elm.disabled = value;
        })
        return this;
    } else {
        return this.selected[0].disabled;
    }
}
SpongeHelpers.prototype.disabled = disabled;