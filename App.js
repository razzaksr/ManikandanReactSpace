import react, { useState } from 'react';
import reactDom from 'react-dom';
import Kart from './Kart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



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