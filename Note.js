import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Note=(props)=>{

    const hey=()=>{
        props.onDelete(props.id)
    }

    return(
        <>
            <div className="col-3 card">
                <div className="text-primary">
                    <h1 className="display-6 card-title">{props.tit}</h1><br/>
                    <div className="card-body">
                        <p className="card-text">{props.des}</p>
                        <p className="card-text float-right">{props.born}</p>
                        <Button className="bg-warning text-danger float-right" onClick={hey}>
                            <DeleteForeverIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Note;