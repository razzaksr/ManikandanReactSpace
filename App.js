import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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