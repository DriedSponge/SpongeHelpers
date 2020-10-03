import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        on(eventName: String, handler: Function): void;
    }
}
var on = function (eventName: String, handler: Function){
    this.selected.forEach((element) => {
        element.addEventListener(eventName, handler);
    });
};
SpongeHelpers.prototype.on = on;