import react from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';



reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
);



/* 
// Hooks with form's to handle complex hooks
reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
);
 */

/* 
// Hooks with form's
reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
);
 */


/* 
// Hooks with form field's
reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
); */


/* 
// Hooks with form field
reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
);
 */

/* 
// Hooks with events
reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
);
 */
/* 
// Hooks
import App from './App';
reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
);
 */
/* 
// Card POC on Props and debug
import CARD from './CARD';
import {decor,data} from './Info';

function each(information)
{
  return(
    <CARD key={information.id} location={information.loc} title={information.tit} content={information.cont} decoration={decor}/>
  );
}

// Cards
reactDom.render(
  <>
    <div className="container-fluid padding mt-lg-5">
      <div className="row padding">
        {data.map(each)}
      </div>
    </div>
  </>
  ,document.getElementById('root')
);
 */
/* 
//Fat arrow sample
import {Head, Para} from './Fats'

reactDom.render(
  <>
    <Para text="Demonstration of Normal function call through components and props"/>
    <Head text="Constant Fat arrow demonstrated here" mod="text-primary mt-5 text-padding bg-danger"/>
  </>
  ,document.getElementById('root')
);
 */
/*  
// Card POC on Props
import CARD from './CARD';
import {decor,data} from './Info';

function each(information)
{
  return(
    <CARD location={information.loc} title={information.tit} content={information.cont} decoration={decor}/>
  );
}

// Cards
reactDom.render(
  <>
    <div className="container-fluid padding mt-lg-5">
      <div className="row padding">
        {data.map(each)}
      </div>
    </div>
  </>
  ,document.getElementById('root')
);
 */
/* 
//Simple Boostrap
reactDom.render(
  <>
    <a href="https://www.linkedin.com" className="btn btn-outline-dark">IN</a>
    <a href="https://www.linkedin.com" className="btn btn-outline-light">IN</a>
    <a href="https://www.linkedin.com" className="btn btn-outline-secondary">IN</a>
    <a href="https://www.linkedin.com" className="btn btn-outline-success">IN</a>
    <a href="https://www.linkedin.com" className="btn btn-outline-warning">IN</a>
    <a href="https://www.linkedin.com" className="btn btn-outline-info">IN</a>
    <a href="https://www.linkedin.com" className="btn btn-outline-danger">IN</a>
    <a href="https://www.linkedin.com" className="btn btn-outline-primary">IN</a>
  </>
  ,document.getElementById('root')
); */


/* 
// Array Mapping
const hey=[12,45,78,90,11]

const yet=hey.map(function check(temp)
{
  console.log(temp);
}
);

console.log("Modern Script");

const fit=hey.map((temp)=>{
  console.log(temp+10);
}
);
 */



/* 
// Props with proper example
import photos from './Feed';
import Hai from './Hai'

function iterate(temp)
{
  return(
    <Hai loc={temp.igsrc} len={temp.ht}/>
  );
}


reactDom.render(
  <>

    {photos.map(iterate)} 

    {/* 
    <Hai loc={photos[0].igsrc} len={photos[0].ht}/>
    <Hai loc={photos[1].igsrc} len={photos[1].ht}/>
    <Hai loc={photos[2].igsrc} len={photos[2].ht}/>
    <Hai loc={photos[3].igsrc} len={photos[3].ht}/> */

    
    /* <Hai loc="https://picsum.photos/id/237/200/300" len="200px"/>
    <Hai loc="https://picsum.photos/id/1/5616/3744" len="200px"/> 
  </>
  ,document.getElementById('root')
);
*/

// POC on import,export aand Components
/*
import App from './App';

reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
);
*/


// Detail on import and export
/* import App from './App'
reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
); */

//Functional Componants
/*
import App from './App';


reactDom.render(
  <>
    <App/>
  </>
  ,document.getElementById('root')
);
*/

/* 
//dynamic style and content based on hour
const base={
  padding: '20px 20px',
  margin:'30px',
  backgroundColor:'cyan',
  color:'grey'
}

const mid={}

let now=new Date("2021","02","16","22");
now=now.getHours();
let wish='';
if(now>=0 && now<12)
{
  wish='Good Morning';
  mid.color='green';
}
else if(now>=12 && now<16)
{
  wish='Good Afternoon';
  mid.color='orange';
}
else if(now>=16 && now<19)
{
  wish='Good Evening';
  mid.color='lime';
}
else if(now>=20)
{
  wish='Good Night';
  mid.color='black';
}

reactDom.render(
  <>
    <h1 contentEditable='true' style={base}><span style={mid}>{wish}</span>, Welcome back</h1>
  </>
  ,document.getElementById('root')
);
 */


/* import './mani.css'
const own=
{
  textAlign:'center',
  color:'yellow',
  backgroundColor:'red'
}


// inline style sheet
reactDom.render(
  <>
    <h1 style={{
  textAlign:'center',
  color:'yellow',
  backgroundColor:'red'
}}>My Gallery</h1>
  <h4 style={own}>Zealous: Technology foundry</h4>
    <div className="ig">
    <a href="https://picsum.photos/200/300/?blur"><img id="i1" src="https://picsum.photos/id/237/200/300"/></a>
    <img src="https://picsum.photos/seed/picsum/200/300"/>
    <img src="https://picsum.photos/200/300"/>
    </div>
  </>
,document.getElementById('root'));
 */

/* 
// adding external style sheet
import './mani.css'


// images
reactDom.render(
  <>
    <a href="https://picsum.photos/200/300/?blur"><img id="i1" src="https://picsum.photos/id/237/200/300"/></a>
    <img src="https://picsum.photos/seed/picsum/200/300"/>
    <img src="https://picsum.photos/200/300"/>
  </>
,document.getElementById('root'));
 */
/* 
//ES 6 notation/expression: ${``}
const date=new Date();
reactDom.render(
  <>
    <h3>{`User logged time is..... ${date.toLocaleTimeString()}`}</h3>
    <b>10+5 is {10+5}</b>
  </>
  ,document.getElementById('root')
);
 */
/* // JSX EXpression
//const name='Manikandan';
let name=prompt("Tell us your name: ")

reactDom.render(
  <>
    <h3>hello user.....{name}</h3>
    <b>10+5 is {10+5}</b>
  </>
  ,document.getElementById('root')
);
 */
/* 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(content,where,callback);

ReactDOM.render(
  <>
    <h4>Zealous: Technology foundry</h4>
    <p>Offers</p>
    <ol>
      <li>steve roggers</li>
      <li>antony stark</li>
    </ol>
  </>,
  document.getElementById('root')
); */


/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render
( React.createElement(React.Fragment, null, 
  React.createElement("h4", null, "Marvel Universe"),
  React.createElement("p", null, "Releases"), 
  React.createElement("ol", null, 
  React.createElement("li", null, "Falcon and Winter solider"), 
  React.createElement("li", null, "Wanda and vision"))), document.getElementById('root')); 
*/

/* var p=document.createElement('p');
p.innerHTML="def print_hi(name):# Use a breakpoint in the code line below to debug your script.print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.";
document.getElementById('root').appendChild(p); */

/* 
var React = require('react');
var ReactDOM=require('react-dom');

ReactDOM.render(
  <>
  <table cellPadding="4" cellSpacing="4">
    <tr>
      <th>Stock</th><th>Worth</th><th>Own</th>
    </tr>
    <tr>
      <td>Jindal</td><td>760</td><td>Razak</td>
    </tr>
    <tr>
      <td>Jindal</td><td>760</td><td>Razak</td>
    </tr>
    <tr>
      <td>Jindal</td><td>760</td><td>Razak</td>
    </tr>
    <tr>
      <td>Jindal</td><td>760</td><td>Razak</td>
    </tr>
  </table>
  </>,
  document.getElementById('root')
); */