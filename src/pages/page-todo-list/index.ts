export function initPageTodoList() {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class= "container">
        <h1 class="title">My To Do List</h1>
        <items-list></items-list>
        <item-form></item-form>
    </div>
    `;
    
    var style = document.createElement('style');
    style.textContent = `
        .container{
            padding: 30px;
            max-width: 300px;
        }
    `;

    div.append(style);
    
    return div
}