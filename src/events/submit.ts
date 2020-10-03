import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        submit(submitFn: Function): void;
    }
}
var submit = function (submitFn: Function){
    this.selected.forEach((element) => {
        element.addEventListener("submit", submitFn);
    });
};
SpongeHelpers.prototype.submit = submit;