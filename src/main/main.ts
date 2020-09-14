window['$'] = (...args) => {
    if (typeof args[0] === 'function') {
        // documwdnt ready listener
        const readyFn = args[0];
        console.log("Document loaded")
        document.addEventListener('DOMContentLoaded', readyFn);
    }else if (typeof args[0] === 'string'){
        //select an element!
        const selector = args[0];
        //DecorateCollection(collection);
        return col.apply(document.querySelectorAll(selector));
    }else if (args[0] instanceof HTMLElement){
        // The given element is a HTML object so we need to select it
        //const collection = [args[0]];
        //DecorateCollection(collection);
        return col.apply([args[0]]);
    }
};
export const col = function(){
    col.prototype.queue = [];
    col.prototype.delayed = false;
    col.prototype.this = this;
    return col.prototype;
};