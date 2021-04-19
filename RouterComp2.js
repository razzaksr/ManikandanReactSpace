import { useParams,useLocation } from 'react-router';

const RouterComp2=(props)=>{
    const hey=useParams()
    const loc=useLocation()
    return(
        <>
            <div className="row justify-content-center">
                Router Two {props.data}
                {loc.pathname=='http://localhost:3000/two/mohamed'}
                    <div className="card">
                        <h1 className="card-title">Router Two {hey.zealous}</h1>
                        <hr className="my-4"/>
                        <div className="card-body">
                            <img src={props.pic} alt="pic"/>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default RouterComp2;