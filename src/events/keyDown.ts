import {col} from "../main/main";

var keyDown = (downFunc) => {
    col.this.forEach((element) => {
        element.addEventListener('keydown', downFunc);
    });
};

col.keyDown = keyDown;