import react from 'react';
import reactDom from 'react-dom';
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