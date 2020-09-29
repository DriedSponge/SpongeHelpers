import {col} from "../main/main";

col.addClass = (...args) => {
    if(typeof args[0] === 'string'){
        col.this.forEach((element) => {
            element.classList.add(args[0]);
        })
    }else if(args[0] instanceof Array){
        args[0].forEach((cls) => {
            col.this.forEach((element) => {
                element.classList.add(cls);
            })
        })
    }
    return col;
}