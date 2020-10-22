import {SpongeHelpers} from "../main/main";
import {ErrorFormat} from  "../main/main";
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
        if(args['loading']!=null){
            args['loading'](true);
        }
        if(args['loader']['enabled']){
            var loader = document.createElement("div");
            loader.innerHTML = "<div class='loader'></div>"
            loader.classList.add(args['loader']['theme']);
            loader.classList.add('status');
            if(args['loader']['fullScreen']){
                let body = document.querySelectorAll('body')[0];
                body.appendChild(loader)
            }else if(elm.classList.contains("auto-loading")){
                elm.appendChild(loader)
            }
        }

        //What happens when we call the error function
        function error(msg){
            if(args['loader']['enabled']){loader.remove()}
            if(args['error']){
                args['error'](msg);
            }else{
                alert("There was a problem performing this action. Please try again later.")
            }
            console.log("%cLoading Complete","color:lime;font-size:14px")
            return console.log(`%c${msg}`,ErrorFormat)
        }

        //We have begun loading
        console.log("%cLoading...","color:lime;font-size:14px")

        //Lets get all of the children of the form
        let ce = elm.querySelectorAll("*");

        //Loop through each element and if it has a name tag, take the value and add it as part of the submit
        var FData = {}
        ce.forEach((input)=>{
            if (input.getAttribute('name')!=null){
                if(input.getAttribute("type")=='checkbox'){
                    //@ts-ignore
                    FData[input.getAttribute('name')]=input.checked;
                }else{
                    //@ts-ignore
                    FData[input.getAttribute('name')]=input.value;
                }
            }
        })

        //If method is set in the args then use it, if it does not exist at all throw error
        var method;
        if(args['method'] != null){
            method = args['method'];
        }else if(elm.getAttribute('method')!=null){
            method = elm.getAttribute('method');
        }else{
            return error("Please specify a method for where to send the data!")
        }

        //If action is set in the args then use it, if it does not exist at all throw error
        var action;
        if(args['action'] != null){
            action = args['action'];
        }else if(elm.getAttribute('action')!=null){
            action = elm.getAttribute('action');
        }else{
            return error("Please specify an action for where to send the data!")
        }

        //Make the request via axios
        axios({
            method:method,
            url: action,
            data: FData
        })
        //What happens when the request is complete
        .then(function(response) {
            //Loading has complete
            console.log("%cLoading Complete","color:lime;font-size:14px")

            //If we have a function we run while loading, rerun it but tell it we are done loading
            if(args['loading']!=null){
                args['loading'](false);
            }

            if(elm.classList.contains("auto-loading")){
                if(args['loader']['destroyLoader']){
                    loader.remove();
                    args['callback'](response);
                }else{
                    args['callback'](response,loader)
                }
            }else{
                args['callback'](response);
            }
        })
        //If there is an error during the request for some reason
        .catch(function (e){
            return error(e);
         });
    });
};
SpongeHelpers.prototype.formInit = formInit;