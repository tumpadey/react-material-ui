import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import Header from './components/Header/Header';


function App() {
  
  return (
     <div>
     <Header></Header>
     
   <Router>
     <Switch>
       <Route path="/home"> 
       <Home></Home>
       </Route>
       <Route path="/post/:postId">
         <PostDetail></PostDetail>

       </Route>
       <Route exact path="/">
        <Home />
       </Route>
       <Route path="*">
         <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
     </div>
  );
}

export default App;
