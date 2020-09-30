import {col} from "../main/main";

var html = (arg) => {
    col.this.forEach((element) => {
        element.innerHTML = arg;
    })
}
col.html = html;