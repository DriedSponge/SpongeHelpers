import {col} from "../main/main";

col.submit = (submitFn) => {
    col.this.forEach((element) => {
        element.addEventListener('submit', submitFn);
    });
};