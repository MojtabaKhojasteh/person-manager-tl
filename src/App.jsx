import React,{Component} from "react";
import Person from "./components/person";
import "./App.css";

class App extends Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <hr />
                <Person/>
            </div>
        );
    }
}
export default App;