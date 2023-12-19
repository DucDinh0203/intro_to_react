import React from "react";

const Wine = (props) => {
  return (
    <div>
      <h1>{props.wine}</h1>
      <h2>{props.winery}</h2>
    </div>
  );
};

export default Wine;
