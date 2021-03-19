import React from 'react'
import Image from './image'
import H3 from './h3'
import B from './b'
import A from './a'

function Card(props)
{
  return(
    <div className="cls">
      <Image imgsrc={props.imgsrc}/>
      <H3 head1={props.head1}/>
      <B head2={props.head2}/>
      <A head3={props.head3}/>
    </div>
  )
}
export default Card;