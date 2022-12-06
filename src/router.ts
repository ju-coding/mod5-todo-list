import {initPageTodoList} from "./pages/page-todo-list";

const routes = [
    {
        path: /\/todo-list/,
        component: initPageTodoList
    }
]

export function initRouter(container) {

    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path)
    }

    function handleRoute(route) {
        for (const r of routes) {
            if (r.path.test(route)) {
                const componentEl = r.component()
                if (container?.firstChild) {
                    container.firstChild.remove();
                }
                container?.appendChild(componentEl);
            }
        }
    }

    if ( location.pathname == "/"){
        goTo("/todo-list")
    } else{
        handleRoute(location.pathname)
    }

    window.onpopstate = () => {
        handleRoute(location.pathname)
    };
}