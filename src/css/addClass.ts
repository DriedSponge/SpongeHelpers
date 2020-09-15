import {col} from "../main/main";

col.prototype.addClass = (className) => {
    col.prototype.this.forEach((element) => {
        element.classList.add(className);
    })
}