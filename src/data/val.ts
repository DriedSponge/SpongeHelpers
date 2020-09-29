import {col} from "../main/main";

col.val = (arg) => {
    const element = col.this[0];
    if (typeof arg === 'string') {
        element.value = arg;
    } else {
        return element.value;
    }
}