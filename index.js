import React from 'react';
import ReactDOM from 'react-dom';
//Components
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App/>,document.getElementBYId('root'));
registerServiceWorker();
const App =() => {
  return (
      <div class="newElement">
         <h1> Hello react !! </h1>
         <div> hey </div>
    </div>
    )
}
ReactDOM.render(</App>,document.querySelector('#root'));
                
import react from 'react';
import ReactDOM from 'react-dom';
                const App = () => {
        return (
           <div className="newElement">
             <h1>Hello react !!</h1>
             <div> hey </div>
        )
          }
ReactDOM.render(</App>,doument.querySelector('#root'));
                
import React from 'react';
const Header = () => {
    return <div> This is my new Header </div>
}
export default Header ;


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(</App>,document.getElementById('root '));
 registerServiceWorker();



import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
    return <h1> Hello world !!!  </h1>
  
}
  ReactDOM.render (</App>,document.querhySelector('#root'));


import React from 'react';
import ReactDOM from 'react-dom';
                   
                   
const App = ()  => {
      return {
          <div className="newElement">
        <h1> Hello React !! </h1>
        <div> Hey </div>
        </div>
        )}
    
    
  ReactDOM.render(</App>,document.querySelector ('#root'));
                  
                   
   import React  from 'react';
   import ReactDOM from 'react-dom';
                  
    const App = () => {
       return  (
          <div className="new Element ">
           <h1> Hello React !! </h1>
           <div> Hey  </div>
         </div>
         )}
  
  
  ReacvtDOm.render(</App>,document.querySelector('#root));
  
  
  
  import React from 'react';
  import ReactDOM from 'react-dom';
                   
  //Component 
   import Header from './components/header'
                   const App =() => {
                return (
                <div>
                  </Header>
                 </div>
                  
                  )
  }
    
  ReactDom.render(</App>,document.querySelector('#root'));
                
  import React from 'react';
   const getYear = () => {
      const newDate =new Date () ;
       return  newDate.getFullYear ();
  }
  const Header = () =>
  {
    return <div> The date is {
      getYear
    }</div>
  }
  export default Header ;
  
  
    
    
    
    
    
                
                  import React from 'react';
                  const user = {
                    name:'Francis',
                    lastName:'Jones',
                    age:16
                  }
                  
                  const Header = () => {
                    return 
                  (
                     <div> 
                       <div>{user.name} </div>
                      <div>{user.lastname} </div>
                      <div>{user.age} </div>  
  
                     </div>
                    )
                  }
                  export default Header;
  
                  import React from 'react';
                  const Header = ()  => {
                    return (
                      <header>
                        <div>Logo </div>
                       <input type="text" />
                      </header> 
                    )
                  }
              export default Header;
    
    
             import React,{Component} from  'react';
    
             class header extends  Component {
               render () {
                 return  (
                    <header>
                     <div> Logo </div>
                    <input type="text"/>
                   </header>
                   ) 
               }
             }
     export default Header ;
    
      class Header extends Component  {
          render () {
             const styles = {
                 header: {
                    background:'#03a9f4'
                 },
               logo: {
                color:#'#fff',
                 fontFamily:'Anton',
                 textAlign:'center' 
               
               }
             }
             
       return  (
           <header style= {styles.}>
           <div> Logo </div>
           <input type ="text"/>
          </header>
         ) }
      }
  
  
  
     body {
       margin:0
     }
     header {
        background:'#03a9f4';
       text-align:center
     }
     
    .logo {
      color :#fff;
      font-size: 40px;
      font-family: 'Anton'
    }
    header input {
      font-size:20px;
      margin:20px 0;
    }
    
     class Header extends Component {
       render ()
       {
         const styles = {
           header: {
              background: '#03a9f4'
           },
           logo:{
             color:'#fff',
             fontFamily:'Anton',
             textAlign:'center' 
           }
         }
         return (
           <header style={styles.header}>
            <div style={styles.logo}>Logo </div>
           <input type="text"/>
           </header>
           )
       }
     }
    
           
                //Index.html
    
   import React, {Component} from 'react';
    import '../css/styles.css'
    class Header extends Component {
      inputChangedHandler(event){
        console.log(event.target.value)
        console.log('hey')
      }
        render() {
        return (
          <header>
           <div>
             className="logo"
             onClick= { ()=>console.log('I was clicked ')}
            >Logo </div>
         <input type="text">
           </header>
    
             )
  }
}
  
  export default Header ;   


class Car {
  constructor () {
    this.wheels= 4;
    this.type="hatchback"
  }
}

class Ford extends Car {
  constructor () {
    super()
    this.windows =4;
  }

}


const car =new Car ();
const ford =new Ford ();
console.log(ford.wheels)

import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';
//COmponents 
import Header from './components/headeer';
import NewsList from './components/news_list ';
class App extends Component {
   state= {
     news:Json
   }
render() {
   news:JSON 
}

render () {
  return {
    <div>
      </Header>
      </NewsList>
    </div>
    
    )
  }

import React,{Component} from 'react';
  import '../css/styles.css'
  class Header extends Component {
    state= {
      keywords:''
    }
  
  inputChangeHandler = (event) => {
    this.setState ({
      keywords:event.target.value
    });
  }
  render () {
    return (
      <header>
        <div classname="logo">Logo</div>
        <input type >
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  




















                   
                   














