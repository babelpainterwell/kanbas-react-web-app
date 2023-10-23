import { Link, useLocation } from "react-router-dom";
import {
  BiUserCircle,
  BiCalendarAlt,
  BiHistory,
  BiVideo,
} from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBook, FaInbox } from "react-icons/fa";
import { AiOutlineShareAlt, AiOutlineQuestionCircle } from "react-icons/ai";
import "./index.css";

function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    { name: "Account", icon: <BiUserCircle />, href: "Account" },
    { name: "Dashboard", icon: <AiOutlineDashboard />, href: "Dashboard" },
    { name: "Courses", icon: <FaBook />, href: "Courses" },
    { name: "Calendar", icon: <BiCalendarAlt />, href: "Calendar" },
    { name: "Inbox", icon: <FaInbox />, href: "Inbox" },
    { name: "History", icon: <BiHistory />, href: "History" },
    { name: "Studio", icon: <BiVideo />, href: "Studio" },
    { name: "Commons", icon: <AiOutlineShareAlt />, href: "Commons" },
    { name: "Help", icon: <AiOutlineQuestionCircle />, href: "Help" },
  ];

  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <Link to="/">
          <img
            src="/images/neu_logo.png"
            alt="University Logo"
            style={{ height: "45px", width: "55px" }}
          />
        </Link>
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.href) ? "wd-active" : ""}
        >
          <Link className="wd-kanbas-navigation-link" to={link.href}>
            <span
              className="wd-kanbas-navigation-icon"
              style={
                link.name === "Account" && pathname.includes(link.href)
                  ? { color: "gray" }
                  : link.name === "Account"
                  ? { color: "white" }
                  : {}
              }
            >
              {link.icon}
            </span>
            <br />
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
