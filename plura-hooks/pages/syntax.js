import React,{useEffect} from "react";
import { useState } from "react/cjs/react.production.min";


const syntax=()=>{

    const [checkBoxValue,setCheckBoxValue]=useState(false);
    useEffect(()=>{
        console.log('in useEffect');
        return()=>{
            console.log('in useEffect Clenup')
        }
    },[checkBoxValue])
    
    return(
        <div></div>

    );
};

export default syntax;