import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.image}/>
      <h1>{props.name}</h1>
      <h1>{props.status}</h1>

    </div>
  );
}
