import {SpongeHelpers} from "../main/main"
declare module "../main/main"{
    export interface SpongeHelpers{
        remove(): void;
    }
}
const remove = function(){
    this.selected.forEach((element) => {
        element.remove();
    })
}
SpongeHelpers.prototype.remove = remove;


