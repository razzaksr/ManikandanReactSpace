import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Note from './Note';

const Bin=(props)=>{

    return(
        <>
        {props.list.map(
        (ele,ind)=>{
          return(<Note key={ind} id={ind} tit={ele.title} des={ele.content}  born={ele.date.toString()}/>)
        }
      )}
        </>
    );
}

export default Bin;