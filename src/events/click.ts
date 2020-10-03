import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        click(clickFn: Function): void;
    }
}
var click = function (clickFn: Function){
    this.selected.forEach((element) => {
        element.addEventListener('click', clickFn);
    });
};
SpongeHelpers.prototype.click = click;