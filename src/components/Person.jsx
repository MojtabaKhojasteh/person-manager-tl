import React from "react";

const Person =({firstname,lastname,age,children})=>{
    return(
        <div>
            <p>{`${firstname} ${lastname} ${age} `}</p>
            <hr />
            <p>{children}</p>
        </div>
    );
}


export default Person;
