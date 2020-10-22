export class SpongeHelpers{
    public this: this;
    public selected:any;
    test(arg){
        console.log(arg);
    }
    constructor(sel) {
        if (!sel) return;
        if (typeof sel === 'function') {
            document.addEventListener('DOMContentLoaded', sel);
        }else if (typeof sel === 'string') {
            this.selected = document.querySelectorAll(sel);
        }else if (sel instanceof HTMLElement){
            this.selected = [sel];
         }
    }
    init(sel){
        return new SpongeHelpers(sel);
    }
}
var sh;
window['$'] = sh = SpongeHelpers.prototype.init;
export var ErrorFormat = "color:red;font-size:14px";