import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        css(css:Object): SpongeHelpers;
    }
}
var css = function(css: Object){
    if (typeof css === 'object'){
        // @ts-ignore
        const cssProps = Object.entries(css);
        this.selected.forEach((element)=>{
            cssProps.forEach(([property, value]) =>{
                // @ts-ignore
                element.style[property] = value;
            })
        })
    }
    return this;
};
SpongeHelpers.prototype.css = css;