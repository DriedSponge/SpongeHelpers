import {col} from "../main/main";

col.prototype.show = () => {
    col.prototype.this.forEach((element) => {
        element.style.display = ' ';
    })
}