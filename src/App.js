import React from 'react'

function Card(props)
{
  return(
    <div className="cls">
      <img src={props.imgsrc} alt=""/>
      <h3>{props.head1}</h3>
      <b>{props.head2}</b>
      <a href={props.head3}>Watch Now</a>
    </div>
  )
}
export default Card;