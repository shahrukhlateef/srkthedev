import React from 'react';
import './App.css';
// import Demo from './Demo';
import Header from './Header';
import Nav from './Nav';
import Banner from './Banner';
import Product from './Product';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
                <BrowserRouter>
                <div>
                    <Header />
                    <Nav />
					<hr />
                    <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} /> 
                    </Switch>
                    <Footer />
                </div>
                </BrowserRouter>
  );
}




const Home = () => {
return(
  <div>
    <Banner />
	<hr />
    <Product />
  </div>
)
}


export default App;
