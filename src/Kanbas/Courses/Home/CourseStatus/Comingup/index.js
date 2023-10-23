import { BiCalendarAlt } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";

function ComingUp() {
  return (
    <div className="mt-3 mb-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="me-5">
          <strong>Coming Up</strong>
        </div>
        <div>
          <Link
            to="/Kanbas/Calendar/screen.html"
            style={{ color: "red" }}
            className="wd-no-underline"
          >
            {/* <i className="fa-regular fa-calendar" style={{ color: "gray" }}></i> */}
            <BiCalendarAlt style={{ color: "gray" }} size={18} />
            View Calendar
          </Link>
        </div>
      </div>
      <hr style={{ margin: "0px" }} />
      <div className="list-group course-status-column">
        <Link
          to="#"
          className="list-group-item list-group-item-action course-status-column"
          aria-current="true"
        >
          <div className="w-100 d-inline-flex align-items-center">
            <div>
              <BiCalendarAlt style={{ color: "gray" }} size={18} />
            </div>
            <div className="ms-3 me-3">
              <p style={{ color: "red", marginBottom: "0px" }}>Lecture</p>
              <small>CS4550.12631.202410</small>
              <br />
              <small>Sep 11 at 11:45am</small>
            </div>
          </div>
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action course-status-column"
          aria-current="true"
        >
          <div className="w-100 d-inline-flex align-items-center">
            <div>
              <BiCalendarAlt style={{ color: "gray" }} size={18} />
            </div>
            <div className="ms-3 me-3">
              <p style={{ color: "red", marginBottom: "0px" }}>
                CS5610 06 SP23 Lecture
              </p>
              <small>CS4550.12631.202410</small>
              <br />
              <small>Sep 11 at 6pm</small>
            </div>
          </div>
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action course-status-column"
          aria-current="true"
        >
          <div className="w-100 d-inline-flex align-items-center">
            <div>
              <BiCalendarAlt style={{ color: "gray" }} size={18} />
            </div>
            <div className="ms-3 me-3">
              <p style={{ color: "red", marginBottom: "0px" }}>
                CS5610 Web Development Summer 1 2023 - LECTURE
              </p>
              <small>CS4550.12631.202410</small>
              <br />
              <small>Sep 11 at 7pm</small>
            </div>
          </div>
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action course-status-column"
          aria-current="true"
        >
          <small style={{ color: "red", marginBottom: "0px" }}>
            12 more in the next week ...
          </small>
        </Link>
      </div>
    </div>
  );
}

export default ComingUp;
