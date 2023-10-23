import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";

function ModuleListItem({ module }) {
  const { _id, name, description } = module;

  return (
    <div className="list-group mt-3 mb-5">
      <Link
        key={_id}
        to="#"
        className="list-group-item list-group-item-action list-group-item-secondary first-child ps-1"
        aria-current="true"
      >
        <div className="d-inline-flex align-items-center pt-1">
          <PiDotsSixVerticalBold
            style={{ color: "black", marginRight: "10px" }}
          />
          <strong className="mb-0 ml-2">{name}</strong>
          <small className="ms-3">{description}</small>
        </div>

        <div className="float-end d-inline-flex align-items-center pt-1">
          <AiFillCheckCircle
            style={{ color: "#067104", marginRight: "20px" }}
            size={20}
          />
          <AiOutlinePlus
            style={{ color: "#a0a0a2", marginRight: "10px" }}
            size={20}
          />
          <IoEllipsisVertical
            style={{ color: "gray", marginRight: "10px" }}
            size={20}
          />
        </div>
      </Link>
    </div>
  );
}

export default ModuleListItem;
