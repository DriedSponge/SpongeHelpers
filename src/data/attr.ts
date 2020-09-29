import {col} from "../main/main";

col.attr = (attr, value) => {
    if (value === undefined) {
        return col.this[0].getAttribute(attr)
    } else {
        col.this.forEach((element) => {
            element.setAttribute(attr, value);
        })
    }
}