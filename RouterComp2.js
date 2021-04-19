
const RouterComp2=(props)=>{
    return(
        <>
            <div className="row justify-content-center">
                <div className="card">
                    <h1 className="card-title">Router Two</h1>
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