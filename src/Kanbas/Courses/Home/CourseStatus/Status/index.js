import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoBanOutline } from "react-icons/io5";

const Status = () => {
  return (
    <div className="mt-3 mb-3">
      <strong>Course Status</strong>
      <div className="hstack gap-0">
        <button type="button" className="btn btn-secondary btn-no-radius w-75">
          <IoBanOutline style={{ color: "#959697" }} className="me-2" />
          Unpublish
        </button>
        <button type="button" className="btn btn-success btn-no-radius w-75">
          <AiOutlineCheckCircle style={{ color: "#959697" }} className="me-2" />
          Published
        </button>
      </div>
    </div>
  );
};

export default Status;
