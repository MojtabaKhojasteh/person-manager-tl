import React from "react";
import Person from "./components/Person";
import "./App.css";

const App =()=>{
    return(
        <div className="App">
            <h1>Hello World </h1>
            <Person firstname="Mojtaba" lastname="Khojasteh" age="31">
                Toplearn
            </Person>
        </div>
    );
}

export default App;