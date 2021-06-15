import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Componets/Sidebar';
import Header from './Componets/header'
import Home from './Componets/Landing';
import { Route, Switch,BrowserRouter as Router,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <div className="wrapper">
   
    <div id="content"> */}
    {/* <Header /> */}
     
     <Router>
     <Sidebar/>
     <Switch>
          <Route exact path="/" component={Home} />
      </Switch>
      </Router>
    

       </div>
// </div>
    
//     </div>
  );
}

export default App;
