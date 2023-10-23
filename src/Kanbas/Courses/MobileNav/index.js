import React from "react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { BiGlassesAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

function MobileNav({ course, screen }) {
  return (
    <nav className="navbar fixed-top nav-mobile">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div>
          <Link to="/Kanbas/KanbasNavigation/screen.html">
            <FaBars style={{ color: "white" }} />
          </Link>
        </div>
        <div
          className="justify-content-center fs-6 text-center"
          style={{ color: "white" }}
        >
          {course.number}.{course._id}.{course.startDate.split("-")[0]}
          <br />
          {screen}
        </div>
        <div className="d-flex me-3">
          <div className="me-3">
            <Link to="#">
              <BiGlassesAlt style={{ color: "white" }} />
            </Link>
          </div>
          <div>
            <Link to="/Kanbas/Courses/CourseNavigation/screen.html">
              <BsChevronDown style={{ color: "white" }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
