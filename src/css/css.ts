import {col} from "../main/main";

col.css = (...cssArgs) => {
    if (typeof cssArgs[0] === 'string'){
        const [property, value] = cssArgs;
        col.this.forEach((element)=>{
            element.style[property] = value;
        })
    }else if (typeof cssArgs[0] === 'object'){
        // @ts-ignore
        const cssProps = Object.entries(cssArgs[0]);
        col.this.forEach((element)=>{
            cssProps.forEach(([property, value]) =>{
                // @ts-ignore
                element.style[property] = value;
            })
        })
    }
};