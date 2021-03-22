import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const NewNote=()=>{


    const[notes,setNotes]=useState([]);


    const [data,setData]=useState({
        title:"",
        content:""
    });
    
    
    const inEvent=(event)=>{

        const {name,value}=event.target;

        setData((oldData)=>{
            return {
                ...oldData,
                [name]:value
              }
        });
    }


    const addTo=()=>{
        setNotes((old)=>{
            return [...old,data]
          });
          setData(()=>{
              return{
                  title:"",
                  content:""
              }
          });
          alert("Adding called");
    }


    return(
        <>
            <div className="container">
                <div className="mt-3">
                    <div className="row">
                        <div className="card" style={{marginLeft:'250px',borderRadius:'14px',borderColor:'blue'}}>
                            <div className="card-body" style={{width:'600px'}}>
                                <form>
                                    <TextField 
                                    id="filled-basic" 
                                    label="title" 
                                    variant="standard" 
                                    placeholder="Title"
                                    name="title"
                                    className="w-100"
                                    onChange={inEvent}
                                    value={data.title}/>

                                    <br/>

                                    <textarea className="w-100 mt-3"
                                    name="content"
                                    onChange={inEvent}
                                    placeholder="Content"
                                    value={data.content}
                                    />

                                    <br/>

                                    <Button 
                                    style={{marginLeft:'450px'}} 
                                    className="text-success bg-warning"
                                    onClick={addTo}>
                                        <AddCircleIcon/>
                                    </Button>
                                </form>
                            </div>
                        </div>
                        <div className="col-4 w-100 d-block">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewNote;