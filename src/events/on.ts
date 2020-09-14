import {col} from "../main/main";

col.prototype.on = (eventName, handler) => {
    col.prototype.this.forEach((element) => {
        element.addEventListener(eventName, handler);
    });
};