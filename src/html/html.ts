import {col} from "../main/main";

col.prototype.html = (arg) => {
    col.prototype.this.forEach((element) => {
        element.innerHTML = arg;
    })
}