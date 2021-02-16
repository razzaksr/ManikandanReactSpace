import react from 'react';

function Table()
{
    return (
        <>
            <table cellPadding="10" cellSpacing="10">
                <tr>
                    <th>Candidate</th><th>Stack</th><th>POC</th>
                </tr>
                <tr>
                    <td>Manikandan</td><td>MERN</td><td>Trade strategy</td>
                </tr>
                <tr>
                    <td>Sasikumar</td><td>Flask</td><td>CRM</td>
                </tr>
                <tr>
                    <td>Arunachalam</td><td>Java</td><td>Campus Connect</td>
                </tr>
                <tr>
                    <td>Riyaz</td><td>Razor</td><td>Trade strategy</td>
                </tr>
            </table>
        </>
    );
}

export default Table;