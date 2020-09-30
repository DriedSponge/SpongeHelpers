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