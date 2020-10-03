import {SpongeHelpers} from "../main/main";
declare module "../main/main"{
    export interface SpongeHelpers{
        data(attr:string | Object, value?:string): SpongeHelpers | Array<string> | string;
    }
}
const data = function (attr:string | Object, value?:string){
    if(attr instanceof Array){ //if the attribut is a array
        let values = {};
        attr.forEach((atr)=>{
            values[atr]=this.selected[0].getAttribute(`data-${atr}`)
        })
        return values;
    }else if(typeof attr === 'object') { //if the attrivute type is an object
        // @ts-ignore
        let atr = Object.entries(attr);
        this.selected.forEach((element)=>{
            atr.forEach(([property, value]) =>{
                element.setAttribute(`data-${property}`, value);
            })
        })
        return this;
    }else if(typeof value === "string" && typeof attr==="string"){
        this.selected.forEach((element)=>{
            element.setAttribute(`data-${attr}`,value)
        })
        return this;
    } else {
        return this.selected[0].getAttribute(`data-${attr}`)
    }
}
SpongeHelpers.prototype.data = data;