import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import Data from './data'
import Ncard from './ncard'

ReactDOM.render(<>
    {Data.map(Ncard)}
</>,document.getElementById('root'));