import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const ToDoItem=(props)=>{
    return(
        <>
        <li onClick={()=>{props.onSelect(props.id);}}>{props.text}</li>
        </>
    );
}

export default ToDoItem;