import React from "react";

export default function CharacterCard(props) {
  return (

    <div>
      <img src={props.image} />
      <h2>Name: {props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Gender: {props.gender}</p>


    </div>



  )

  
}
