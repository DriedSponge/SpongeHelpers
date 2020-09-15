import {col} from "../main/main";

col.prototype.removeClass = (className) => {
    col.prototype.this.forEach((element) => {
        element.classList.remove(className);
    })
}