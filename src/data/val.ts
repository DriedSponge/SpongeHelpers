import {col} from "../main/main";

col.prototype.val = (arg) => {
    const element = col.prototype.this[0];
    if (typeof arg === 'string') {
        element.value = arg;
    } else {
        return element.value;
    }
}