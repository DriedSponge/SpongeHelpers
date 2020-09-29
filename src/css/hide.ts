import {col} from "../main/main";

const hide = () => {
    col.this.forEach((element) => {
        element.style.display = 'none';
    })
}
col.hide = hide;