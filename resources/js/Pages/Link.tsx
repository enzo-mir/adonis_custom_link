import React from "react";

function Link({ imgUrl, text }) {
  return (
    <>
      {imgUrl ? <img src="" alt="" /> : <p>no image</p>}
      {text ? <p>{text}</p> : <p>no text</p>}
    </>
  );
}

export default Link;
