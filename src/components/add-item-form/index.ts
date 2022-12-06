import {state} from "../../state";

export function initItemForm() {

    class ItemForm extends HTMLElement {
        constructor() {
            super();
            this.render()
        }

        connectedCallback() {
            const form = this.shadowRoot?.querySelector(".form")
            form?.addEventListener("submit", (e)=> {
                e.preventDefault();
                const f = e.target as any;                
                state.addItem(f.text.value)
            })
        }


        render() {
            const shadow = this.attachShadow({mode: "open"});
            var form = document.createElement('form');
            form.className = "form"
            form.innerHTML = `
                <input name="text" type="text" class="new">
                <button class="submit">+</button>
            `

            var style = document.createElement('style');
            style.textContent = `
                .form{
                    
                    
                } 
            `
            shadow.appendChild(style);
            shadow.appendChild(form);
        }
    }
    customElements.define('item-form', ItemForm);
}