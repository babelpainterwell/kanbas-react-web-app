import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteModule, setModule } from "../../modulesReducer";
import * as client from "../../client";

function ModuleListItem({ module }) {
  const dispatch = useDispatch();
  const { _id, name, description } = module;

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  return (
    <div className="list-group mt-3 mb-5">
      <div
        key={_id}
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
          <button
            // onClick={(event) => {
            //   setModule(module);
            // }}
            onClick={() => dispatch(setModule(module))}
            className="btn btn-sm btn-light me-2"
          >
            Edit
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDeleteModule(module._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModuleListItem;
