

const RouterComp1=(props)=>{
    return(
        <>
            <div className="row justify-content-center">
                <div className="card">
                    <h1 className="card-title">Router One</h1>
                    <hr className="my-4"/>
                    <div className="card-body">
                        <img src={props.pic} alt="pic"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RouterComp1;