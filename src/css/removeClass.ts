import {col} from "../main/main";

col.prototype.removeClass = (...args) => {
    if(typeof args[0] === 'string') {
        col.prototype.this.forEach((element) => {
            element.classList.remove(args[0]);
        })
    }else{
        args[0].forEach((cls) => {
            col.prototype.this.forEach((element) => {
                element.classList.remove(cls);
            })
        })
    }
    return col.prototype;
}