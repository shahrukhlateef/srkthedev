import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Demo from './Demo';
import Header from './Header';
import Nav from './Nav';
import Banner from './Banner';
import Product from './Product';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App name="Shahrukh Khan" />, document.getElementById('root'));
// ReactDOM.render(<Demo name="Shahrukh Khan" />, document.getElementById('root'));

ReactDOM.render(
                <div>
                    <Header />
                    <Nav />
                    <Banner />
                    <Product />
                    <Footer />
                </div>
                 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
