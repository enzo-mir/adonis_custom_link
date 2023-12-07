import React from "react";

function Link({ img, text }) {
  return (
    <>
      {img ? <img src={img} alt="" /> : <p>no image</p>}
      {text ? <p>{text}</p> : <p>no text</p>}
    </>
  );
}

export default Link;
