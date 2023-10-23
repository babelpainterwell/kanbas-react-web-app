import ModuleList from "./ModuleList";
// import "./index.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";

function Modules() {
  return (
    <div className="container-fluid">
      <div className="d-block col-12">
        <div>
          <div style={{ textAlign: "right" }}>
            <button className="btn btn-secondary btn-sm d-inline-block me-2">
              Collapse All
            </button>
            <button className="btn btn-secondary btn-sm d-inline-block me-2">
              View Progress
            </button>
            <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle btn-sm"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <AiOutlineCheckCircle
                  style={{ color: "#068927" }}
                  size={18}
                  className="me-1"
                />
                Publish All
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <button className="dropdown-item" type="button">
                    Publish All
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Publish all items and modules
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    UnPublish
                  </button>
                </li>
              </ul>
            </div>
            <button className="btn btn-danger btn-sm d-inline-block me-2">
              + Module
            </button>
            <button className="btn btn-secondary btn-sm d-inline-block me-2">
              <FaEllipsisV />
            </button>
          </div>
          <hr />
          <ModuleList />
        </div>
      </div>
    </div>
  );
}

export default Modules;
