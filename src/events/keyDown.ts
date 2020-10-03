import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        keyDown(downFunc: Function): void;
    }
}
var keyDown = function (downFunc: Function){
    this.selected.forEach((element) => {
        element.addEventListener('keydown', downFunc);
    });
};
SpongeHelpers.prototype.keyDown = keyDown;