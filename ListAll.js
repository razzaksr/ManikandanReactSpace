const ListAll=()=>{
    return(
        <>
            <div className="my-4 container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-10 p-3 rounded shadow border border-blue">
                        <h1 className="text-center text-info">Listing All Service entries</h1>
                        <table className="table table-bordered table-responsive-sm table-hover table-warning">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Log Entry no</th><th>Register no</th>
                                    <th>Owner name</th><th>Owner contact</th>
                                    <th>Issues</th><th>Bill</th><th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SH42W</td><td>TN54L4192</td>
                                    <td>Razak Mohamed S</td><td>8765567863</td>
                                    <td>General service</td><td>2000</td>
                                    <td>
                                        <div className="row justify-content-around">
                                            <button className="btn btn-outline-info badge-pill">Edit</button>
                                            <button className="btn btn-outline-danger badge-pill">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListAll;