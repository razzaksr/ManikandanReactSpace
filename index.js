import react from 'react';
import reactDom from 'react-dom';



reactDom.render(
  <>
    
  </>
  ,document.getElementById('root')
);


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