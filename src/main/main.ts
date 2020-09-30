// window['$'] = (...args) => {
//     if (typeof args[0] === 'function') {
//         // documwdnt ready listener
//         const readyFn = args[0];
//         document.addEventListener('DOMContentLoaded', readyFn);
//     }else if (typeof args[0] === 'string'){
//         //select an element!
//         const selector = args[0];
//         //DecorateCollection(collection);
//         return mcol.apply(document.querySelectorAll(selector));
//     }else if (args[0] instanceof HTMLElement){
//         // The given element is a HTML object so we need to select it
//         //const collection = [args[0]];
//         //DecorateCollection(collection);
//         return mcol.apply([args[0]]);
//     }
// };

class SpongeHelpers{
    constructor(sel) {
        if (!sel) return;
        if (typeof sel === 'function') {
            const readyFn = sel;
            document.addEventListener('DOMContentLoaded', readyFn);
        }else if (typeof sel === 'string') {
            return parseCollection.apply(document.querySelectorAll(sel));
        }

    }
    init(sel){
        return new SpongeHelpers (sel)
    }
}
window['$'] = SpongeHelpers.prototype.init;
var parseCollection = function(){
    parseCollection.prototype.this = this;
    return parseCollection.prototype;
};
export const col = parseCollection.prototype;



