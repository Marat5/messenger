import Login from './pages/Login/Login.js';
import Registration from './pages/Registration/Registration.js';
import Chat from './pages/Chat/Chat.js';
import ErrorPage from './pages/Error/Error.js';
import Profile from './pages/Profile/Profile.js';
function isEqual(lhs, rhs) {
    return lhs === rhs;
}
function render(query, block) {
    console.log(query);
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
}
class Route {
    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }
    leave() {
        if (this._block) {
            this._block.remove();
            this._block = null;
        }
    }
    match(pathname) {
        return isEqual(pathname, this._pathname);
    }
    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            return;
        }
        this._block.show();
    }
}
class Router {
    constructor(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        Router.__instance = this;
    }
    use(pathname, block) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }
    start() {
        console.log('newroute');
        // На смену роута вызываем перерисовку
        window.onpopstate = (event => {
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render(route, pathname);
    }
    go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }
    back() {
        this.go("/");
    }
    forward() {
        this.go("/login");
    }
    getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
}
let router = new Router("body");
router
    .use("/", Chat)
    .use("/chat", Chat)
    .use("/login", Login)
    .use("/registration", Registration)
    .use("/error", ErrorPage)
    .use("/profile", Profile)
    .start();
export default router;
// export default function initRouter() {
//     console.log('initialized')
//     // Необходимо оставить в силу особенностей тренажёра
//     // history.pushState({}, '', '/');
//     const router = new Router("body");
//     router
//         .use("/", Chat)
//         .use("/chat", Chat)
//         .use("/login", Login)
//         .use("/registration", Registration)
//         .use("/error", ErrorPage)
//         .use("/profile", Profile)
//         .start();
//     // setTimeout(() => {
//     //     router.go("/login");
//     // }, 1000);
//     // setTimeout(() => {
//     //     router.go("/registration");
//     // }, 2000);
//     // setTimeout(() => {
//     //     router.go("/error");
//     // }, 3000);
//     // setTimeout(() => {
//     //     router.go("/profile");
//     // }, 4000);
// }
