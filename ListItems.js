import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ListItems=(props)=>{

    const[state,setState]=useState(false);

    const hey=()=>{
        setState(true);
    }

    return(
        <>
            <span onClick={hey}>
                <DeleteForeverIcon />
            </span>
            <b style={{textDecoration:state?'line-through':'none'}}>{props.text}</b><br/>
        </>
    );
}

export default ListItems