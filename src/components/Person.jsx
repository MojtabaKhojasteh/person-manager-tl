import React from "react";

const Person =({firstname,lastname,age})=>{
    return(
        <div>
            <p>{`${firstname} ${lastname} ${age} `}</p>
            <hr />
        </div>
    );
}


export default Person;
