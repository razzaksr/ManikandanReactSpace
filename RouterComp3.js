import react from 'react';
import { useParams } from 'react-router';

const RouterComp3=()=>{
    const hey=useParams()
    return(
        <>
            <div className="row justify-content-center">
                <div className="card">
                    <h1 className="card-title">Router Three {hey.zealous}</h1>
                    <hr className="my-4"/>
                    <div className="card-body">
                        <img src="Images/avlogo.png" alt="pic"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RouterComp3;