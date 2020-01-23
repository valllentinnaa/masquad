import React from 'react';
import Movies from './components/Movies';
import Home from './pages/Home';
import Menu from "./components/menu/Menu";
import Articles from './components/articles/Articles'

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => (
        <div className="row">
            <div className="col-2">
                <Menu/>
            </div>
            <div className="col-10">
                {props.children}
            </div>
        </div>
);

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Articles/>
        </Layout>
    },
    {
        path: '/articles',
        exact: false,
        main: () => <Layout>
            <Articles/>
        </Layout>
    },
    {
        path: '/gallery',
        exact: false,
        main: () => <Layout>
            <Movies/>
        </Layout>
    }
]

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact={route.exact} 
            key={index}
            path={route.path}>
            {route.main}
        </Route>
    })
}

function App() {
    return <Provider store={store}>
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    </Provider>
}

export default App;
