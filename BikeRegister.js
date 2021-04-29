const BikeRegister=()=>{
    return(
        <>
            <div className="my-3 container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12 rounded shadow border p-3">
                        <h2 className="text-center text-primary">Service log entry</h2>
                        <form action="#">
                        <div className="form-group">
                                <label>Service log number</label>
                                <input type="text" name="logno" placeholder="Service log number" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Registration number of vehicle</label>
                                <input type="text" name="regno" placeholder="bike reg no" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Owner of vehicle</label>
                                <input type="text" name="owner" placeholder="bike owner name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Contact number of vehicle owner</label>
                                <input type="text" name="contact" placeholder="Contact number" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Issues</label>
                                <textarea className="form-control" placeholder="Issues" name="issues"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Estimation bill</label>
                                <input type="text" name="bill" placeholder="Estimated bill" className="form-control"/>
                            </div>
                            <div className="row justify-content-around">
                                <button className="btn btn-outline-info">Take</button>
                                <button className="btn btn-outline-secondary">Reject</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BikeRegister;