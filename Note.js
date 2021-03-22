import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Note=()=>{
    return(
        <>
            <div className="card w-25">
                <div className="text-primary">
                    <h1 className="display-6 card-title">Title</h1><br/>
                    <div className="card-body">
                        <p className="card-text">Content</p>
                        <Button className="bg-warning text-danger">
                            <DeleteForeverIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Note;