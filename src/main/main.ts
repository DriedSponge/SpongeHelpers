window['$'] = (...args) => {
    if (typeof args[0] === 'function') {
        // documwdnt ready listener
        const readyFn = args[0];
        document.addEventListener('DOMContentLoaded', readyFn);
    }else if (typeof args[0] === 'string'){
        //select an element!
        const selector = args[0];
        //DecorateCollection(collection);
        return mcol.apply(document.querySelectorAll(selector));
    }else if (args[0] instanceof HTMLElement){
        // The given element is a HTML object so we need to select it
        //const collection = [args[0]];
        //DecorateCollection(collection);
        return mcol.apply([args[0]]);
    }
};
var mcol = function(){
    mcol.prototype.queue = [];
    mcol.prototype.delayed = false;
    mcol.prototype.this = this;
    return mcol.prototype;
};
export const col = mcol.prototype;