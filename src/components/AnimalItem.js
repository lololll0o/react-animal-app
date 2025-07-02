import React from "react";

const AnimalItem = ({ src, alt }) => {
  console.log("이미지 렌더링 *********", src);
  return (
    <li>
      <img src={src} alt={alt}/>
    </li>
  );
}

export default AnimalItem;