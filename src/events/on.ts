import {col} from "../main/main";

col.on = (eventName, handler) => {
    col.this.forEach((element) => {
        element.addEventListener(eventName, handler);
    });
};