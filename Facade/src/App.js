import React from 'react';
import Movies from './components/Movies';
import MenuBar from './components/header/MenuBar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Articles from './components/articles/Articles';
import SingleArticle from './components/articles/SingleArticle';
import Testimonials from './components/testiomonials/Testimonials';
import Contact from './components/contact/Contact';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

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
    <>
        <MenuBar />
        <Header/>
        <Services/>
        <Articles />
        <Testimonials />
        <Contact />
        <Footer />
        {/*<div className="container mt-5">*/}
        {/*    {props.children}*/}
        {/*</div>*/}
    </>
);

const ArticleLayout = props => (
    <>
        <MenuBar />
        <Header/>
        <SingleArticle />
        <Contact />
        <Footer />
    </>
);

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
    },
    {
        path: '/favorite',
        exact: false,
        main: () => <Layout>
            <Favorite/>
        </Layout>
    },
    {
        path: '/gallery',
        exact: false,
        main: () => <Layout>
            <Movies/>
        </Layout>
    },
    {
        path: '/article/:articleId',
        exact: false,
        main: () => <ArticleLayout />
    }
];

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
