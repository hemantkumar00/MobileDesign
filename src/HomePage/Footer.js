import { BsCartFill } from "react-icons/bs";
import { SiHomebridge } from "react-icons/si";
import { AiFillBell } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-home">
          <SiHomebridge className="footer-icon1" /> <span>Home</span>
        </div>
        <BsCartFill />
        <AiFillBell />
        <FaUserAlt />
      </div>
    </>
  );
}
