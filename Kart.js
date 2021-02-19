import react from 'react';
// POC on Import,Export and components

let accBalance=897.5;

function deposit(data)
{
    accBalance+=data;
    return(
        <>
            <h2>{data} deposited successfully</h2>
            <h3>Account balance is: {accBalance}</h3>
        </>
    );
}

function withdraw(data)
{
    if(accBalance>=data)
    {
        accBalance-=data;
        return(<>
            <h2>{data} debited successfully</h2>
            <h3>Account balance is: {accBalance}</h3>
            </>
        );
    }
    else
    {
        return(
            <>
                <h2>{data} insufficient {accBalance}</h2>
                <h3>Account balance is: {accBalance}</h3>
            </>
        );
    }
}

function Kart()
{
    const wish=prompt("What you wish to do: ");
    if (wish=='credit')
    { 
        return deposit(Number(prompt("tell us amount to deposite: ")));
    }
    else
    {
        return withdraw(Number(prompt("tell us amount to debit: ")));
    }
}

export default Kart;