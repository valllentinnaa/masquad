import React from 'react';
import Movies from './components/Movies';
import Home from './pages/Home';
import Layout from './components/layout/Layout'

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


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout />
    },
    {
        path: '/favorite',
        exact: false,
        main: () => <Layout/>

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
