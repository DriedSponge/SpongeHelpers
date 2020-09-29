import {col} from "../main/main";

var show = () => {
    col.this.forEach((element) => {
        element.style.display = ' ';
    })
}
col.show = show;