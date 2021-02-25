import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


/* function Para(props)
{
    return(
        <p className="text-success text-center padding">{props.text}</p>
    );
} */


const Para=((props)=>{
    return(
        <p className="text-success text-center padding">{props.text}</p>
    );
});

const Head=(
    (props)=>{
        return(
            <h1 className={props.mod}>{props.text}</h1>
        );
    }
);

export {Para,Head};