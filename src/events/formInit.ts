import {SpongeHelpers} from "../main/main";
//@ts-ignore
const axios: any = require('axios');

declare module "../main/main"{
    export interface SpongeHelpers{
        formInit(args:Array<any>): void;
    }
}
var formInit = function (args:Array<any>){
    let elm = this.selected[0];
    elm.addEventListener('submit',function (e){
        e.preventDefault();
        if(args['loading']!=undefined){
            args['loading'](true);
        }else if(elm.classList.contains("auto-loading")){
            var loader = document.createElement("div");
            loader.innerHTML = "Loading"
            loader.classList.add('loading-cover');
            elm.appendChild(loader)
        }
        console.log("%cLoading...","color:lime;font-size:14px")
        let ce = document.getElementById(elm.id).querySelectorAll("*");
        var FData = {}
        ce.forEach((input)=>{
            if (input.getAttribute('name')!=undefined){
                if(input.getAttribute("type")=='checkbox'){
                    //@ts-ignore
                    FData[input.getAttribute('name')]=input.checked;
                }else{
                    //@ts-ignore
                    FData[input.getAttribute('name')]=input.value;
                }
            }
        })
        axios({
            method: elm.getAttribute('method'),
            url: elm.getAttribute('action'),
            data: FData
        })
        .then(function(response) {
            if(args['loading']!=undefined){
                args['loading'](false);
            }else if(elm.classList.contains("auto-loading")){
                elm.removeChild(loader)
            }
            console.log("%cLoading Complete","color:lime;font-size:14px")
            args['callback'](response);
        });

    });

};
SpongeHelpers.prototype.formInit = formInit;