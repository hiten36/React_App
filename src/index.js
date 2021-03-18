import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import Card from './App'
import Data from './data'

function ncard(val)
{
    return(
        <Card
            imgsrc={val.imgsrc}
            head1={val.head1}
            head2={val.head2}
            head3={val.watch}
        />
    )
}
ReactDOM.render(<>
    {Data.map(ncard)}
</>,document.getElementById('root'));