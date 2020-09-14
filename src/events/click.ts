import {col} from "../main/main";

col.prototype.click = (clickFn) => {
    col.prototype.this.forEach((element) => {
        element.addEventListener('click', clickFn);
    });
};