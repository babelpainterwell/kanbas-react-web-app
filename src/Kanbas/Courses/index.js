import React from "react";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
// import db from "../Database";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import CourseBreadCrumb from "./CourseBreadCrumb";
import MobileNav from "./MobileNav";
import CourseNavigation from "./CourseNavigation";
import Settings from "./Settings";
import MobileCourseNavigation from "./CourseNavigation/MobileCourseNavigation";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import * as client from "../Dashboard/client";
import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  // const { courseId, assignmentId } = useParams();
  const { courseId } = useParams();
  // console.log(courseId);
  const { pathname } = useLocation();
  // const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const screen = pathname.split("/")[4];

  // get courses from redux store
  // const coursesFromStore = useSelector((state) => state.coursesReducer.courses);
  // const course = coursesFromStore.find((course) => course._id === courseId);

  // interact with server to get course
  // const [course, setCourse] = useState({});
  // useEffect(() => {
  //   client.findCourseById(courseId).then((course) => setCourse(course));
  // }, [courseId]);

  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

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
        <MobileNav course={course} />
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
            {/* <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            /> */}
            <Route path="Assignments/create" element={<AssignmentEditor />} />
            <Route
              path="Assignments/:assignmentId/edit"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
            <Route path="Settings" element={<Settings />} />
            <Route
              path="MobileCourseNavigation"
              element={<MobileCourseNavigation />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
