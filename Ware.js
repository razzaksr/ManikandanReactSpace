const myOrg="Zealous Tech Corp";

let newOrg=prompt("Tell us your new organisastion: ");

const decor={backgroundColor:'black',
color:'yellow'}

let colors=['maroon','grey','cyan','black','white','green'];

function select()
{
    const which=Number(prompt("Tell us index: "));
    console.log(colors[which]);
    return (colors[which]);
}


export default myOrg;

export {newOrg,decor,select};