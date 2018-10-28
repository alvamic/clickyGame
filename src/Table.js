import React from "react";

 export const Row = props =>
  <div className={`row${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export const Column = props => {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  return (
    <div className={size}>
      {props.children}
    </div>
  );
};

export default Row;
