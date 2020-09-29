import {col} from "../main/main";

col.removeClass = (...args) => {
    if(typeof args[0] === 'string') {
        col.this.forEach((element) => {
            element.classList.remove(args[0]);
        })
    }else{
        args[0].forEach((cls) => {
            col.this.forEach((element) => {
                element.classList.remove(cls);
            })
        })
    }
    return col;
}