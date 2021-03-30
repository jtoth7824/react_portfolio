import React from "react";

function Container(props) {
  return (
      <div  style={props.style}>{props.children}</div>      
  );
}

export default Container;