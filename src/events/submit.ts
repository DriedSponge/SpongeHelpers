import {col} from "../main/main";

col.prototype.submit = (submitFn) => {
    col.prototype.this.forEach((element) => {
        console.log("test")
        element.addEventListener('submit', submitFn);
    });
};