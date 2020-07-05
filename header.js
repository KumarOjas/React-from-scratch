import React{Component} from "react";
import '../css/styles.css'
function click () {
   //
class Header extends Component {
//Component 
   render() {
  return  (
     <header>
      <div className="logo"
     onClick= { ()=>{console.log("I was clicked ")}}
     <input type="text"/>
     </header>
     )
   }
}
   export default Header;
