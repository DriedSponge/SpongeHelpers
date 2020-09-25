import {col} from "../main/main";

col.prototype.addClass = (...args) => {
    if(typeof args[0] === 'string'){
        col.prototype.this.forEach((element) => {
            element.classList.add(args[0]);
        })
    }else if(args[0] instanceof Array){
        args[0].forEach((cls) => {
            col.prototype.this.forEach((element) => {
                element.classList.add(cls);
            })
        })
    }
    return col.prototype;
}