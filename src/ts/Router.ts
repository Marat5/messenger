import Login from './pages/Login/Login.js';
import Registration from './pages/Registration/Registration.js';
import Chat from './pages/Chat/Chat.js';
import ErrorPage from './pages/Error/Error.js';
import Profile from './pages/Profile/Profile.js';

function isEqual(lhs, rhs) {
    return lhs === rhs;
}

function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
}

class Route {
    _pathname: any;
    _blockClass: any;
    _block: any;
    _props: any;

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
    static __instance: any;
    routes: any[];
    history: History;
    _currentRoute: any;
    _rootQuery: any;
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
        this.go("/login")
    }

    forward() {
        this.go("/retistration")
    }

    getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
}

let router = new Router("body");
router
    .use("/", Login)
    .use("/chat", Chat)
    .use("/login", Login)
    .use("/registration", Registration)
    .use("/error", ErrorPage)
    .use("/profile", Profile)

    .start();

export default router;