import react from 'react';
import info, { decor } from './Info';


function CARD(props)
{
    const styl={
        width:decor.wid,
        height:decor.ht
    }
    const sty={
        width:props.decoration.wid,
        height:props.decoration.ht
    }
    return(
        <>
            <div className="col-md-4">
                <div className="card text-secondary">
                    <img src={props.location} style={sty} className="card-image"/>
                    <div className="card-info">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.content}</p>
                        <a href="#" className="btn btn-outline-primary">Know More</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CARD;