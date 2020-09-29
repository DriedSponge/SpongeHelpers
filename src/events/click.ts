import {col} from "../main/main";

col.click = (clickFn) => {
    col.this.forEach((element) => {
        element.addEventListener('click', clickFn);
    });
};