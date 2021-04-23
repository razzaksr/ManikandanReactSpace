import SearShow from "./SearShow";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const Searching=()=>{
    const[word,setWord]=useState('');
    const eve=(event)=>{
        const hai=event.target.value;
        setWord(hai);
    }
    return(
        <>
            <div class="row justify-content-center">
                <input 
                type="text" 
                value={word}
                placeholder="search what you want?"
                className="form-control"
                onChange={eve}
                />
                <SearShow what={word}/>
            </div>
        </>
    );
}
export default Searching;