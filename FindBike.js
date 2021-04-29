const FindBike=()=>{
    return(
        <>
            <div className="my-4 container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12 rounded shadow border p-4">
                        <h1 className="text-center text-success">Find Bike status</h1>
                        <form action="#">
                            <div className="form-group">
                                <label>Serice Log number</label>
                                <input type="text" className="form-control" name="log" placeholder="Service log entry"/>
                            </div>
                            <h3 className="text-center text-danger">OR</h3>
                            <div className="form-group">
                                <label>Registration number</label>
                                <input type="text" className="form-control" name="reg" placeholder="Registration number"/>
                            </div>
                            <div className="row justify-content-around">
                                <button className="btn btn-outline-success">Search</button>
                                <button className="btn btn-outline-danger">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FindBike;