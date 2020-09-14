import {col} from "../main/main";

col.prototype.submit = (submitFn) => {
    col.prototype.this.forEach((element) => {
        element.addEventListener('submit', submitFn);
    });
};