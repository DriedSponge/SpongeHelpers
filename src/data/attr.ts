import {col} from "../main/main";

col.prototype.attr = (attr, value) => {
    if (value === undefined) {
        return col.prototype.this[0].getAttribute(attr)
    } else {
        col.prototype.this.forEach((element) => {
            element.setAttribute(attr, value);
        })
    }
}