import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import { Chat } from './pages/Chat/Chat';
import { ErrorBlock } from './pages/Error/Error';
import { Profile } from './pages/Profile/Profile';
import { render, isEqual } from './helpers';

class Router {
    static __instance: Router;
    routes: Route[];
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

    init() {

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
        if (route) {
            route.render();
        }
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

let router = new Router("body");
router.init = () => {
    router
        .use("/", Login)
        .use("/chat", Chat)
        .use("/login", Login)
        .use("/registration", Registration)
        .use("/error", ErrorBlock)
        .use("/profile", Profile)

        .start();
}


export {router};