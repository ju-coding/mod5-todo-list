import {initRouter} from "./router";
import { initItemForm } from "./components/add-item-form";
import {initItemsList} from "./components/items-list";





function main(){
    const root = document.querySelector(".root");
    
    initRouter(root);
    initItemForm();
    initItemsList();
}
main()