import React, { useState } from "react";
import { Transition } from 'react-transition-group';

export const Cards = (props) => {

  const [state, setState] = useState(true);
    
  const Title = (props) => {
  
    {if (state === true) {
      return (

      <section className={`title ${props.type}`}>
        <h1>{props.title}</h1> 
        <div className="emoji">{props.image}</div>
      </section>
      )} 
    else {
      return (
        <section className={`title ${props.type} clicked `}>
          <h1>{props.title}</h1> 
        </section>
      )
    }
  }}

    const Description = (props) => {

      {if (state) {
      return (
        <div className={`${props.type}-description description`}>
          <p className="italic">{props.description}</p>
          <Button {...props} />
        </div>
      )
      } 
      else {
        return (
          <div className={`${props.type}-description description clicked `}>
            <p style={{fontSize: 80}}>{props.image}</p>
          </div>
        )
      }
    }}
  
    const Button = (props) => {
        return (
          <button className={`${props.type} button`}
          onClick={event => setState(false)}
          >
            {props.button}
          </button>
        )
      }
     
  return (
  
  <article className="card">

    <Title {...props}/>
    <Description {...props}/>

  </article>


  )
}

  
