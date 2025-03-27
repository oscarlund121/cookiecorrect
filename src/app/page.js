import LikeButton from "@/components/LikeButton.jsx"
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";



export default function Home() {
  return (
    <div>
      <div className="icon-row">
        <IoCloseOutline style={{ display: "flex", alignSelf: "flex-end" }} />
        <LiaCookieBiteSolid style={{ fontSize: "56px", transform: "rotate(-90deg)", color: "white" }} />
      </div>
      <p>We use Cookies to improve your user experience</p>
      <LikeButton label="I like Cookies" />
    </div>
  );
}
