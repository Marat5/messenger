import { Login } from './pages/Login/Login.js';
import { Registration } from './pages/Registration/Registration.js';
import { Chat } from './pages/Chat/Chat.js';
import { ErrorBlock } from './pages/Error/Error.js';
import { Profile } from './pages/Profile/Profile.js';
import Route from './Route.js';
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
        this
            .use('/', Login)
            .use('/chat', Chat)
            .use('/login', Login)
            .use('/registration', Registration)
            .use('/profile', Profile)
            .use('/error', ErrorBlock);
        // На смену роута вызываем перерисовку
        window.onpopstate = ((event) => {
            this._onRoute(event.currentTarget.location.pathname);
        });
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
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }
    back() {
        this.go('/login');
    }
    forward() {
        this.go('/retistration');
    }
    getRoute(pathname) {
        return this.routes.find((route) => route.match(pathname)) || this.routes.find((route) => route.match('/error'));
    }
}
const router = new Router('body');
export { router };
