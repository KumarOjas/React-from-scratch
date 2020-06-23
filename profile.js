import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route } from 'react-router-dom'
//Components 
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles'

const App = () => {
   return (
     <BrowserRouter>
        <div>  
            <header>
                Header 
            </header>
           <Route path="/" component={Home }/>
           <Route path="/posts" component={Posts}/>
           <Route path="/profiles" component={Profiles}/>
         </div>
         </BrowserRouter>
         ) 
         }
 ReactDOM.render(
    </App>,
