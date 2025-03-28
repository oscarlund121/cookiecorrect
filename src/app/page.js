'use client'
import LikeButton from "@/components/LikeButton.jsx"
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";



export default function Home() {
  const [cookiesAccepted, setCookieAccepted] = useState(false);
  console.log(cookiesAccepted);
  return (
    !cookiesAccepted && (
      <div>
        <div className="icon-row">
          <IoCloseOutline style={{ display: "flex", alignSelf: "flex-end" }} />
          <LiaCookieBiteSolid style={{ fontSize: "56px", transform: "rotate(-90deg)", color: "white" }} />
        </div>
        <p>We use Cookies to improve your user experience</p>
        <button onClick={() => setCookieAccepted(!cookiesAccepted)}>
          I like cookies
        </button>
      </div>
    )
  );
}
