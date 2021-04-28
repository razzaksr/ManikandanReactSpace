import react from 'react';
import reactDom from 'react-dom';
//import Kart from './Kart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from 'react-router';
import BikeMenu from './BikeMenu';
import BikeHome from './BikeHome';
import NewBikeUser from './NewBikeUser';
import Connect from './Connect';


const App=()=>{
  return(
    <>
      <BikeMenu/>
      <Switch>
        <Route exact path="/" component={BikeHome}/>
        <Route exact path="/newuser" component={NewBikeUser}/>
        <Route exact path="/connect" component={Connect}/>
      </Switch>
    </>
  );
}


/* 
import AvengerMenu from './AvengerMenu';
import AvengerHome from './AvengerHome';
import Versions from './Versions';
import Features from './Features';
import Services from './Services';
import Connect from './Connect';

const App=()=>{
  return(
    <>
      <AvengerMenu/>
      <Switch>
        <Route exact path="/" component={AvengerHome}/>
        <Route exact path="/versions" component={Versions}/>
        <Route exact path="/features" component={Features}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/connect" component={Connect}/>
        <Redirect to="/"/>
      </Switch>
    </>
  );
}
*/

/* 
import react, { useState } from 'react';
import reactDom from 'react-dom';
import RouterComp1 from './RouterComp1';
import RouterComp2 from './RouterComp2';
import RouterComp3 from './RouterComp3';
import NavMenus from './NavMenus';
import ErrorComp from './ErrorComp';
import Searching from './Searching';

// React Router search engine
const App=()=>{
  return(
    <>
      <div className="container">
        <NavMenus/>
        <Switch>
          <Route exact path="/" component={()=><RouterComp1 pic="Images/jd.jpg"/>}/>
          <Route path="/two/:zealous" render={()=><RouterComp2 pic="Images/business.jpg" data="hai"/>}/>
          <Route path="/find" component={Searching}/>
          <Route path="/three" component={RouterComp3}/>
          <Route component={ErrorComp}/>
        </Switch>
      </div>
    </>
  );
}
 */
/* 
// React Router useParam,useLocation,useHistory hook
const App=()=>{
  return(
    <>
      <div className="container">
        <NavMenus/>
        <Switch>
          <Route exact path="/" component={()=><RouterComp1 pic="Images/jd.jpg"/>}/>
          <Route path="/two/:zealous" render={()=><RouterComp2 pic="Images/business.jpg" data="hai"/>}/>
          <Route path="/three" component={RouterComp3}/>
          <Route component={ErrorComp}/>
        </Switch>
      </div>
    </>
  );
}
 */
/* // React Router
const App=()=>{
  return(
    <>
      <div className="container">
        <NavMenus/>
        <Switch>
          <Route exact path="/" component={()=><RouterComp1 pic="Images/jd.jpg"/>}/>
          <Route path="/two" render={()=><RouterComp2 pic="Images/business.jpg"/>}/>
          <Route path="/three" component={RouterComp3}/>
          <Route component={ErrorComp}/>
        </Switch>
      </div>
    </>
  );
} */

/* 
import Heading from './Heading';
import Footing from './Footing';
import NewNote from './NewNote';
import Note from './Note';
import Bin from './Bin';
import Button from '@material-ui/core/Button';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import UpdateNote from './UpdateNote';


// Custom Google Keep App POC -- Done well manner
const App=()=>{

  const[notes,setNotes]=useState([]);
  const[history,setHistory]=useState([]);
  const[binView,setBinView]=useState(false);
  const[upView,setUpView]=useState(false)

  const[index,setIndex]=useState();

  const insert=(data)=>{
    setNotes((old)=>{
      return [...old,data]
    });
    alert("Adding called");
  }

  const change=(srcs)=>{
      //return [...old,data]
      notes[srcs[1]].title=srcs[0].title
      notes[srcs[1]].content=srcs[0].content
      notes[srcs[1]].date=srcs[0].date
    alert("update done");
    setUpView(false);

  }

  const del=(id)=>{

    setHistory((old)=>{
      return [...old,notes[id]]
    });

    setNotes((old)=>{
      return old.filter((ele,index)=>{
        return index!==id;
      })
    });
  }

  const onBin=()=>{
    
    setBinView(true);
  }

  const edit=(id)=>{
    alert("Edit called in App.js");
    setIndex(id);
    setUpView(true)
  }

  return (
    <>
      <Heading/>
      <Button onClick={onBin}><DeleteSweepIcon/></Button>
      {upView?<UpdateNote alter={change} update={notes[index]} id={index}/>:<NewNote submit={insert}/>}
      
      <div className="row">
      {notes.map(
        (ele,ind)=>{
          return(<Note key={ind} id={ind} tit={ele.title} des={ele.content} onDelete={del} born={ele.date.toString()} onEdit={edit}/>)
        }
      )}
      </div>
      {binView?
      <>
      <h1 className="display-1">BinView</h1>
      <div className="row">
        {
          
            
          history.map(
              (ele,ind)=>{
                return(<Note key={ind} id={ind} tit={ele.title} des={ele.content} born={ele.date.toString()}/>)
              }
            )
            
          
        }
      </div>
      </>
      :null}
      <Footing/>
    </>
  );
}

 */

/* 
// Bootstrap inbuilt card group
const App=()=>{
  return(
    <>
      <div className="container-fluid">
        <h1 className="display-4 text-center text-primary">Bootstrap Card group</h1>
        <div class="card-group my-5">
          <div class="card mr-4">
            <img class="card-img-top" height="200px" src="https://picsum.photos/seed/picsum/200/300" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" height="200px" src="https://picsum.photos/200/300?grayscale" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card ml-4">
            <img class="card-img-top" height="200px" src="https://picsum.photos/200/300/?blur" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

 */
/* 
import Button from '@material-ui/core/Button';
import ListItems from './ListItems';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// ToDoList Strikking
const App=()=>{

  const[inp,setInp]=useState("");
  const[mylist,setMylist]=useState([]);


  const modify=(event)=>{
    setInp(event.target.value);
  }

  const onAdd=()=>{
    setMylist((old)=>{
      return [...old,inp]
    });
    setInp('');
  }
  return(
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6 mt-5 text-center">
            <div className="card bg-light">
              <h1 className="card-title">Digital To do</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <TextField type="text"
                    id="standard-basic"  
                    name="data" id="data" 
                    placeholder="Tell what you wish to add" 
                    className="form-control"
                    onChange={modify}
                    value={inp}/>
                  </div>
                  <div className="col">
                    <Button className="btn btn-outline-primary" onClick={onAdd}>
                      <AddCircleIcon/>
                    </Button>
                  </div>
                </div>
                <hr className="my-4"/>
                <div className="text-danger text-left">
                  
                    {mylist.map((element,index)=>{
                      return (<ListItems text={element} id={index} key={index} />);
                    })}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

 */
/* 
//digital clock via npmjs
import Clock from 'react-digital-clock';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const App=()=>{
  return(
    <>
      <div className="row bg-primary align-self-center">
        <Clock />
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={[
            ['#004777', 0.25],
            ['#F7B801', 0.25],
            ['#A30000', 0.25],
            ['#F7B801', 0.25],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </>
  );
}
 */


/* 
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// Matrial UI Advanced
const App=()=>{


  const[number,setNumber]=useState(0);

  const plus=()=>{
    setNumber(number+1);
  }


  const minus=()=>{
    if(number>0)
    {
      setNumber(number-1);
    }
    else{
      alert("Range exceed");
      setNumber(0);
    }
  }


  return(
    <>
      <div className="container-fluid">
        <div style={{marginTop:"200px"}} className="row padding ml-5 justify-content-center">
          <div className="col-6 card " >
            <h2 className="card-title display-6 text-center">Meter</h2>
            <div className="card-body">
              <TextField id="standard-basic" value={number} className="w-100 "/>
              <div className="row">
                <div className="col text-center">
                  <Button  onClick={plus} className="text-success bg-aqua">
                    <AddCircleIcon/>
                  </Button>
                </div>
                <div className="col text-center">
                  <Button  onClick={minus} className="text-danger bg-aqua">
                    <RemoveCircleIcon/>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 */


/* 
// Matrial UI Intro
const App=()=>{


  const[number,setNumber]=useState(0);

  const plus=()=>{
    setNumber(number+1);
  }


  const minus=()=>{
    if(number>0)
    {
      setNumber(number-1);
    }
    else{
      alert("Range exceed");
      setNumber(0);
    }
  }


  return(
    <>
      <div className="container-fluid">
        <div style={{marginTop:"200px"}} className="row padding ml-5 justify-content-center">
          <div className="col-6 card " >
            <h2 className="card-title display-6 text-center">Meter</h2>
            <div className="card-body">
              <h3 className="bg-warning text-primary text-center">{number}</h3>
              <div className="row">
                <div className="col text-center">
                  <AddCircleIcon onClick={plus} className="w-25 h-100 text-success"/>
                </div>
                <div className="col text-center">
                  <RemoveCircleIcon onClick={minus} className="w-25 h-100 text-danger"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 */

/* 
import ToDoItem from './ToDoItem';

// ToDo POC
const App=()=>{
  const[inp,setInp]=useState("");
  const[mylist,setMylist]=useState([]);


  const modify=(event)=>{
    setInp(event.target.value);
  }

  const onAdd=()=>{
    setMylist((old)=>{
      return [...old,inp]
    });
    setInp('');
  }

  const del=(id)=>{
    //console.log('delete called '+id);
    setMylist((old)=>{
      return old.filter((ele,index)=>{
        return index!==id;
      })
    });
  }


  return(
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6 mt-5 text-center">
            <div className="card bg-light">
              <h1 className="card-title">Digital To do</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <input type="text" 
                    name="data" id="data" 
                    placeholder="Tell what you wish to add" 
                    className="form-control"
                    onChange={modify}
                    value={inp}/>
                  </div>
                  <div className="col">
                    <button className="btn btn-outline-primary" onClick={onAdd}>Add</button>
                  </div>
                </div>
                <hr className="my-4"/>
                <div className="text-danger text-left">
                  <ul type="square">
                    {mylist.map((element,index)=>{
                      // return(<li>{element}</li>);
                      return (<ToDoItem text={element} id={index} key={index} onSelect={del}/>);
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

 */
/* 
// Hooks with form's handle complex hooks optimise using spread(...) operator
const App=()=>{

  const [register,comRegister]=useState({
    id:"",
    pwd:"",
    con:"",
    mob:0,
    mail:""
  });

  const [state,updateState]=useState("");
  
  const change=(event)=>{

  const {name,value}=event.target;

  //console.log(name,value);
    

    comRegister((prev)=>
    {
      return {
        ...prev,
        [name]:value
      }
    })
  };

  const click=(event)=>{
    event.preventDefault();
    //console.log(register.id+" "+register.mob+" "+register.mail);
    if(register.pwd==register.con)
    {
      alert("Registration submited successfully by "+register.id);
      updateState(register.id+" "+register.mob+" "+register.mail);
    }
    else
    {
      alert("Password mismatch");
    }
  }
  

  return(
    <>
      <div>
        <form name="reg" onSubmit={click}>
          <h1 className="display-4">Registration Process </h1>
          <input type="text" name="id" onChange={change}/>
          <input type="password" name="pwd" onChange={change}/> 
          <input type="password" name="con" onChange={change}/>
          <input type="number" name="mob" onChange={change}/>
          <input type="email" name="mail" onChange={change}/>
          <button type="submit"> Submit </button>
          <h2 className="justify-content-center text-success">{state}</h2>
        </form>
      </div>
    </>
  );
}

 */

/* 
// Object destructuring
const App=()=>{
  var hai=[12,45,1,56,13,78,24,12,66];

  // destructuring
  let [one,,,,,,,two,three]=hai;

  console.log(one+" "+two+" "+three);

  // ...

  let [check,...hey]=hai;
  console.log(check);
  console.log(hey);


  const srcs={
    name:"razak mohamed s",
    place:"salem"
  }


  let cv={
    exp:10,
    contact:867002959,
    email:'razzaksr@gmail.com',
    ...srcs
  }

  console.log(cv);
}
 */

/* 
// Hooks with form's handle complex hooks
const App=()=>{

  const [register,comRegister]=useState({
    id:"",
    pwd:"",
    con:"",
    mob:"",
    mail:""
  });

  const [state,updateState]=useState("");
  
  const change=(event)=>{

    const gotName=event.target.name;
    const gotValue=event.target.value;
    

    comRegister((prev)=>
    {
      if(gotName==='user')
      {
        return{
          id:gotValue,
          pwd:prev.pwd,
          con:prev.con,
          mob:prev.mob,
          mail:prev.mail
        };
      }
      else if(gotName==='conpass')
      {
        return{
          id:prev.id,
          pwd:prev.pwd,
          con:gotValue,
          mob:prev.mob,
          mail:prev.mail
        };
      }
      else if(gotName==='contact')
      {
        return{
          id:prev.id,
          pwd:prev.pwd,
          con:prev.con,
          mob:gotValue,
          mail:prev.mail
        };
      }
      else if(gotName==='email')
      {
        return{
          id:prev.id,
          pwd:prev.pwd,
          con:prev.con,
          mob:prev.mob,
          mail:gotValue
        };
      }
      else if(gotName==='pass')
      {
        return{
          id:prev.id,
          pwd:gotValue,
          con:prev.con,
          mob:prev.mob,
          mail:prev.mail
        }
      }
    })
  };

  const click=(event)=>{
    event.preventDefault();
    if(register.pwd==register.con)
    {
      alert("Registration submited successfully by "+register.id);
      updateState(register.id+" "+register.mob+" "+register.mail);
    }
    else
    {
      alert("Password mismatch");
    }
  }
  

  return(
    <>
      <div>
        <form name="reg" onSubmit={click}>
          <h1 className="display-4">Registration Process </h1>
          <input type="text" name="user" onChange={change}/>
          <input type="password" name="pass" onChange={change}/> 
          <input type="password" name="conpass" onChange={change}/>
          <input type="number" name="contact" onChange={change}/>
          <input type="email" name="email" onChange={change}/>
          <button type="submit"> Submit </button>
          <h2 className="justify-content-center text-success">{state}</h2>
        </form>
      </div>
    </>
  );
}

 */



/* 
// Hooks with form's
const App=()=>{

  const [login,validLogin]=useState({
    id:"",
    pwd:""
  });
  
  const change=(event)=>{
    //console.log(event.target.name);
    //console.log(event.target.value);

    const gotName=event.target.name;
    const gotValue=event.target.value;
    

    validLogin((prev)=>
    {
      if(gotName==='user')
      {
        //console.log(gotName+" "+gotValue);
        return{
          id:gotValue,
          pwd:prev.pwd,
        };
      }
      else
      {
        return{id:prev.id,
          pwd:gotValue,
        }
      }
    })
    console.log(login.id+" "+login.pwd);
  };

  const click=(event)=>{
    event.preventDefault();
    //console.log(login.id+" "+login.pwd);
    //console.log(name+" "+pass);
    if(login.id==='razak' && login.pwd==='mohamed')
    {
      window.location.assign('https://www.google.com');
    }
    else{
      window.location.assign('https://www.linkedin.com');
    }
  }
  

  return(
    <>
      <div>
        <form name="log" onSubmit={click}>
          <h1 className="display-2">Hello </h1>
          <input type="text" name="user" onChange={change}/>
          <input type="password" name="pass" onChange={change}/> 
          <button type="submit"> Submit </button>
        </form>
      </div>
    </>
  );
}

 */

/* 
// Hooks with form fields
const App=()=>{

  const [name,setName]=useState("");
  const [status,setStatus]=useState("");
  const change=(event)=>{
    setName(event.target.value);
  }

  const click=()=>{
    //console.log(name+" "+pass);
    (name==='manikandan' && pass==='salem')?setStatus(name+" logged successully"):setStatus(name+" logging failed");
  }


  const [pass,setPass]=useState("");
  const passchange=(event)=>{
    //console.log(event.target.value);
    setPass(event.target.value);
  }
  

  return(
    <>
      <div>
        <h1 className="display-2">Hello {status}</h1>
        <input type="text" onChange={change} value={name}/>
        <input type="password" onChange={passchange}/> 
        <button onClick={click}> Submit </button>
      </div>
    </>
  );
}

 */

/* 
// Hooks with form field
const App=()=>{

  const [name,setName]=useState("");
  const [fullname,setFullname]=useState("")

  const change=(event)=>{
    setName(event.target.value);
  }

  const click=()=>{
    setFullname(name);
  }

  return(
    <>
      <div>
        <h1 className="display-2">Hello {fullname}</h1>
        <input type="text" onChange={change} value={name}/>
        <button onClick={click}> Submit </button>
      </div>
    </>
  );
}
 */

/* 
//Hooks with events
const App=()=>{

  const [bg,setBg]=useState('purple');
  const [content,setContent]=useState('Hello there?');


  const eve=()=>{
    setBg('green');
    setContent('How you doing?');
  }

  const doub=()=>{
    setBg('purple');
    setContent('Hello there?');
  }

  return(
    <>
      <div className="container" style={{backgroundColor:bg}}>
        <button className="btn btn-light badge-pill" onClick={eve} onDoubleClick={doub}>{content}</button>
      </div>
    </>
  );
} */
export default App;
/* 
//Hooks

const App=()=>{

  let time=new Date().toLocaleTimeString();

  let [newtime,setTime]=new useState(time);

  const newstime=()=>{
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(newstime,1000);

  return(
    <>
      <div className="text-center mt-lg-5 padding">
        <h1 className="display-4">{newtime}</h1>
      </div>
    </>
  );
} */
/* const App=()=>{
  const value=10;
  // syntax of hooks: let object[var,functions/iterate]=new useState(initialization)
  let [newvalue,setValue]=new useState(value);

  const pressed=()=>{
    setValue(newvalue+10);
  }

  return(
    <>
      <div className="text-center mt-lg-5 padding">
        <h1 className="display-4">{newvalue}</h1>
        <button className="btn btn-outline-primary" onClick={pressed}>Dare to click</button>
      </div>
    </>
  );
} */

//export default App;

// POC on import, Export and Components
/*
import Kart from './Kart';

function App()
{
  //return(<Kart/>);
  return(
    <>
      <Kart/>
    </>
  );
}
export default App;
*/

// Detail on import and export
/* 
import myOrg,{newOrg,decor,select} from './Ware'
import * as obj from './Ware'

function App()
{
    return(

reactDom.render(
  <>
    <h1 style={{color:'blue'}}>{obj.default}</h1>
    <h1 style={obj.decor}>{obj.newOrg}</h1>
    <p style={{color:obj.select()}}>New beginning of technology rebel started</p>
  </>
  ,document.getElementById('root')
); 



 <>
   <h1 style={{color:'blue'}}>{myOrg}</h1>
   <h1 style={decor}>{newOrg}</h1>
   <p style={{color:select()}}>New beginning of technology rebel started</p>
 </>
 );
}
export default App;
 */

// Functional Componants
/*

import reactDom from 'react-dom';
import List from './List'
import Table from './Table'

function App()
{
    return(
        <>
            <List/>
            <Table/>
        </>
    );
}

export default App;

*/