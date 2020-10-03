import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        val(value?:string): SpongeHelpers;
    }
}
const val = function (value?:string){
    const element = this.selected[0];
    if (typeof value === 'string') {
        element.value = value;
        return this;
    } else {
        return element.value;
    }
}
SpongeHelpers.prototype.val = val;