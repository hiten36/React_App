import React from 'react';
import Card from './App'

function Ncard(props)
{
    return (
        <Card
        imgsrc={props.imgsrc}
        head1={props.head1}
        head2={props.head2}
        head3={props.watch}
    />
    )
}
export default Ncard