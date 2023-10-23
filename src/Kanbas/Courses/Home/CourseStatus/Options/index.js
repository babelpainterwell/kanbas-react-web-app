import React from "react";
import { Link } from "react-router-dom";
import { LiaFileImportSolid } from "react-icons/lia";
import { TbFileImport } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaBullhorn } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";

const Options = () => {
  return (
    <div className="mt-3 mb-3">
      <div className="vstack gap-1">
        <Link to="#">
          <button type="button" className="btn btn-secondary w-100 text-start">
            {/* <i className="fa-solid fa-file-import"></i> */}
            <LiaFileImportSolid className="me-2" />
            Import Existing Content
          </button>
        </Link>
        <Link to="#">
          <button type="button" className="btn btn-secondary w-100 text-start">
            {/* <i className="fa-solid fa-arrow-right"></i> */}
            <TbFileImport className="me-2" />
            Import From Commons
          </button>
        </Link>
        <Link to="#">
          <button type="button" className="btn btn-secondary w-100 text-start">
            {/* <i className="fa-solid fa-bullseye"></i> */}
            <FiTarget className="me-2" />
            Choose Home Page
          </button>
        </Link>
        <Link to="#">
          <button type="button" className="btn btn-secondary w-100 text-start">
            {/* <i className="fa-solid fa-chart-simple"></i> */}
            <AiOutlineBarChart className="me-2" />
            View Course Stream
          </button>
        </Link>
        <Link to="#">
          <button type="button" className="btn btn-secondary w-100 text-start">
            {/* <i className="fa-solid fa-bullhorn"></i> */}
            <FaBullhorn className="me-2" />
            New Announcement
          </button>
        </Link>
        <Link to="#">
          <button type="button" className="btn btn-secondary w-100 text-start">
            {/* <i className="fa-solid fa-chart-simple"></i> */}
            <AiOutlineBarChart className="me-2" />
            New Analytics
          </button>
        </Link>
        <Link to="#">
          <button type="button" className="btn btn-secondary w-100 text-start">
            {/* <i className="fa-regular fa-bell"></i> */}
            <AiOutlineBell className="me-2" />
            View Course Notifications
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Options;
