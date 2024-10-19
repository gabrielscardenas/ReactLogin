import React from 'react';

function Body({ heading, content }) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Body;
