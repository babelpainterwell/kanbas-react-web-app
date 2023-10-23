import React from "react";

function Todos() {
  return (
    <div className="mt-3 mb-3">
      <strong>To Do</strong>
      <hr style={{ margin: "0px" }} />
      <div className="list-group course-status-column">
        <a
          href="#"
          className="list-group-item list-group-item-action course-status-column"
          aria-current="true"
        >
          <div className="w-100 d-inline-flex align-items-center">
            <div>
              <i className="fa-solid fa-1" style={{ color: "red" }}></i>
            </div>
            <div className="ms-3 me-3">
              <p style={{ color: "red", marginBottom: "0px" }}>
                Grade A1 - ENV + HTML
              </p>
              <small>100 points Sep 18 at 11:59pm</small>
            </div>
            <div>
              <i className="fa-solid fa-xmark" style={{ color: "gray" }}></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Todos;
