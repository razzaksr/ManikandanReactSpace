import react from 'react';
import { useHistory } from 'react-router';


const RouterComp3=()=>{

    const hist=useHistory()
    console.log(hist);
    
    return(
        <>
            <div className="row justify-content-center">
                <div className="card">
                    <h1 className="card-title">Router Three </h1>
                    <hr className="my-4"/>
                    <div className="card-body">
                        <img src="" alt="pic"/>
                    </div>
                </div>
            </div>
            <a href="#" class="btn btn-outline-primary" onClick={()=>hist.goBack()}>Go back</a>
            <a href="#" class="btn btn-outline-dark" onClick={()=>hist.push('/')}>Go Home</a>
        </>
    );
}

export default RouterComp3;