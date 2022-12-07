import {state} from "../../state";

export function initItemsList() {

    class ItemsList extends HTMLElement {
        constructor() {
            super();
            
        }
        connectedCallback(){
            state.subscribe(()=>{
                this.render();
            })
        }

        render() {
            const list = state.getState().list;
            
            // const shadow = this.attachShadow({mode: "open"});
            var div = document.createElement('div');
            div.className = "itemsList"
            div.innerHTML = `
                ${list.map((item)=>{
                    return `
                    <div class="item">
                    <input class="checkbox" type="checkbox">
                    <p class="itemText">${item}</p>
                    </div>`
                }).join("")}
                
            `

            var style = document.createElement('style');
            style.textContent = `
                .itemsList{
                    border: solid;
                    border-width: 1px;
                    margin: 30px 0;
                    padding: 3px;
                }
                .item{
                    display: flex;
                    margin: 0;
                }
                .itemText{
                    text-decoration-line: none;
                }
                .checkbox{
                    margin-right: 7px;
                }
            `
            // shadow.appendChild(style);
            // shadow.appendChild(div);
            div.appendChild(style);
            if (this?.firstChild) {
                this.firstChild.remove();
            }
            this?.appendChild(div);

            
            // list.map((item) => {
            //     const checkBox = div.querySelectorAll(".checkbox");
            //     console.log(checkBox[item]);
                
            //     const itemText = div.querySelectorAll(".itemText");
            //     console.log(itemText[item]);
                
            //     if (checkBox[item]?.checked){
            //         item.style.textDecorationLine = "line-through";
            //     }
            // })
        }
    }
    customElements.define('items-list', ItemsList);
}