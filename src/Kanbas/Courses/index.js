import React from "react";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import db from "../Database";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CourseBreadCrumb from "./CourseBreadCrumb";
import MobileNav from "./MobileNav";
import CourseNavigation from "./CourseNavigation";
import Settings from "./Settings";

function Courses() {
  const { courseId, assignmentId } = useParams();
  console.log(courseId);
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  console.log(course);
  return (
    <div className="wd-flex-grow-1 wd-flex-item-left-margin wd-all-vertical-space">
      {/* top nav visitable starting from lg */}
      <div className="d-none d-lg-block">
        <CourseBreadCrumb
          course={course}
          screen={screen}
          // assignmentId={assignmentId}
        />
      </div>

      {/* mobile nav */}
      <div className="d-block d-lg-none">
        <MobileNav course={course} screen={screen} />
      </div>

      {/* below top nav till large  */}
      {/* below top nav after large  */}
      {/* <div></div> */}

      <div className="wd-flex-row-container-non-navigation">
        {/* course navigation */}
        <CourseNavigation />

        <div className="wd-flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
            <Route path="Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
