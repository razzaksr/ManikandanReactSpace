import { useParams,useLocation, useHistory } from 'react-router';

const RouterComp2=(props)=>{
    const hey=useParams();
    const loc=useLocation();
    const hist=useHistory()
    return(
        <>
            <div className="row justify-content-center">
                Router Two {props.data}
                {loc.pathname===`/two/razak`?
                    <div className="card">
                        <h1 className="card-title">Router Two {hey.zealous}</h1>
                        <hr className="my-4"/>
                        <div className="card-body">
                            <img className="card-img" src={props.pic} alt="pic"/>
                        </div>
                    </div>
                :null}
            </div>
            <a href="#" class="btn btn-outline-warning" onClick={()=>hist.goForward()}>Go forward</a>
        </>
    );
}

export default RouterComp2;