import {col} from "../main/main";

col.prototype.hide = () => {
    col.prototype.this.forEach((element) => {
        element.style.display = 'none';
    })
}