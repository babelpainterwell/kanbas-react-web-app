import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Assignments",
    "Grades",
    "Piazza",
    "Zoom Meetings",
    "Quizzes",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];

  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="d-none d-lg-block">
      <ul className="wd-second-column-navigation">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className={pathname.includes(link) ? "wd-active" : ""}
            >
              <Link to={`/Kanbas/Courses/${courseId}/${link}`}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CourseNavigation;
