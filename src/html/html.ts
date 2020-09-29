import {col} from "../main/main";

col.html = (arg) => {
    col.this.forEach((element) => {
        element.innerHTML = arg;
    })
}