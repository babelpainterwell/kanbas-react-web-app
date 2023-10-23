import { Link } from "react-router-dom";
import db from "../Database";
import CourseCard from "./CourseCard";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-flex-grow-1 wd-flex-item-left-margin wd-all-vertical-space">
      {/* nav bar  */}
      <div>
        <nav className="navbar navbar-expand-lg wd-show-bottom-border">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarText">
              <span
                className="navbar-text"
                style={{ color: "black", fontSize: "28px" }}
              >
                Dashboard
              </span>
            </div>
          </div>
        </nav>
      </div>

      {/* course cards */}
      <div
        className="container-fluid"
        style={{ paddingLeft: "50px", paddingRight: "50px", marginTop: "20px" }}
      >
        <h3>Published Courses ({courses.length})</h3>
        <hr />
        <div className="row d-flex flex-row flex-wrap">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
