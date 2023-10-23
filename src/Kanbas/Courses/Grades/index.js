import "./index.css";
import db from "../../Database";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineExport } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { AiOutlineImport } from "react-icons/ai";
import { PiMagnifyingGlass } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";
import GradesTable from "./GradesTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div className="container-fluid">
      {/* top buttons */}
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-secondary btn-sm"
          style={{ marginRight: "15px" }}
        >
          <AiOutlineImport size={16} className="me-2" />
          Import
        </button>
        <div className="dropdown-center mr-5" style={{ marginRight: "15px" }}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* <i
              className="fa-solid fa-file-export"
              style={{ color: "#afb0b1" }}
            ></i> */}
            <AiOutlineExport size={16} className="me-2" />
            Export
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Action two
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Action three
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-secondary mr-3">
          <BsFillGearFill />
        </button>
      </div>

      <div className="row mt-3 w-75">
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="student-name" className="form-label">
              <strong>Student Names</strong>
            </label>
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary" type="button">
                <PiMagnifyingGlass size={18} />
              </button>
              <select
                className="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                style={{ borderLeft: "0px" }}
              >
                <option selected>Search Students</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="assignment-name" className="form-label">
              <strong>Assignment Names</strong>
            </label>
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary" type="button">
                <PiMagnifyingGlass size={18} />
              </button>
              <select
                className="form-select"
                id="inputGroupSelect03"
                aria-label="Example select with button addon"
                style={{ borderLeft: "0px" }}
              >
                <option selected>Search Assignments</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block">
        <button className="btn btn-secondary">
          <FiFilter size={18} className="me-2" />
          Apply Filters
        </button>
      </div>

      {/* placeholder for gradestable */}
      <GradesTable assignments={assignments} enrollemnts={enrollments} />
    </div>
  );
}

export default Grades;
