import './App.css';
import Menu from './Common/Menu';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/ContactUs/Contact';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';

import 'tachyons';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <div className="container">
       <header className="pt3 pb3 bg-black-10"><Menu /></header>
       <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} /> 
       </Switch>
    </div>
    
    
    </BrowserRouter>
  );
}

export default App;
