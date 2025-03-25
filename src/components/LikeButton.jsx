"use client"
import { useState } from "react";

import { FaAccessibleIcon } from "react-icons/fa";

const LikeButton = (props) => {
  const [likes, setLikes] = useState(0);

  return (
 /*    <button onClick={() => setLikes(likes + 1)}>
      <FaAccessibleIcon /> {props.label}{likes > 1 ? "s" : ""} {likes}
    </button> */
    <button>{props.label}</button>
  )
};

export default LikeButton;