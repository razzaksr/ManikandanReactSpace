import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';


const UpdateNote=(props)=>{

    

    const[visible,setVisible]=useState(false)
    

    const [data,setData]=useState({
        title:props.update.title,
        content:props.update.content,
        date:props.update.date
    });


    
    
    
    const inEvent=(event)=>{
        //alert("onEvent called")

        const {name,value}=event.target;

        setData((oldData)=>{
            return {
                ...oldData,
                [name]:value,
                date:[new Date().toLocaleDateString(),new Date().toLocaleTimeString()]
              }
        });
    }


    const addTo=()=>{
        props.alter([data,props.id])
        setData(()=>{
            return{
                title:"",
                content:"",
                date:[]
            }
        });
    }


    return(
        <>
            <div className="container-fluid">
            <h1 className="text-center text-primary">Update Existing Note</h1>
                <div className="mt-3">
                    <div className="row align-items-center justify-content-center">
                        {/* <div className="card" style={{marginLeft:'250px',borderRadius:'14px',borderColor:'blue'}}> */}
                        <div className="col-4 card shadow-lg rounded">
                            {/* <div className="card-body" style={{width:'600px'}} onDoubleClick={()=>{setVisible(false)}}> */}
                            <div className="card-body" onDoubleClick={()=>{setVisible(false)}}>
                                <form>
                                    {visible?
                                    <TextField 
                                    id="filled-basic" 
                                    label="title" 
                                    className="w-100"
                                    variant="standard" 
                                    placeholder="Title"
                                    name="title"
                                    value={data.title}
                                    onChange={inEvent}
                                    />
                                    :null}
                                    <br/>
                                    <textarea 
                                    name="content"
                                    className="mt-2 w-100 rounded"
                                    onChange={inEvent}
                                    placeholder="Content"
                                    value={data.content}
                                    onClick={()=>{setVisible(true)}}
                                    />

                                    <br/>
                                    {visible?
                                    <Button 
                                    className="text-success bg-warning float-right"
                                    onClick={addTo}>
                                        <UpdateIcon/>
                                    </Button>
                                    :null}
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateNote;