import "./index.css";
import CourseForm from "./courseForm";
import CourseItem from "./courseItem";
import { useSelector, useDispatch } from "react-redux";
import { setCourses } from "./coursesReducer";
import { useEffect } from "react";
import * as client from "./client";

function Dashboard() {
  // const courses = db.courses;
  const dispatch = useDispatch();
  useEffect(() => {
    client.findAllCourses().then((courses) => dispatch(setCourses(courses)));
  }, []);

  const courses = useSelector((state) => state.coursesReducer.courses);
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
        <div
          style={{
            display: "flex",
          }}
        >
          <h3>Published Courses ({courses.length})</h3>
          {/* <Link to={"/Kanbas/Dashboard/edit"}>
            <button className="btn btn-secondary ms-3">Edit</button>
          </Link> */}
        </div>

        <hr />
        {/* <div className="row d-flex flex-row flex-wrap">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div> */}
        <ul className="list-group">
          <CourseForm />
          {courses.map((course) => (
            <CourseItem course={course} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Dashboard;
