import { BsClipboardData } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./index.css";

function CourseCard({ course }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="card wd-card">
        <img src="/images/gray.png" className="card-img-top" alt="course" />
        <div
          className="card-body"
          style={{ padding: "8px", paddingLeft: "6px" }}
        >
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="wd-no-underline"
          >
            <h6 className="card-title" style={{ color: "cornflowerblue" }}>
              {course.number} {course._id} {course.name}
            </h6>
            <p
              className="card-text"
              style={{ marginBottom: "0.5rem", color: "gray" }}
            >
              {course.number}.{course._id}.{course.startDate}
            </p>
            <p
              className="card-text"
              style={{
                fontSize: "12px",
                color: "darkgray",
                marginBottom: "0.5rem",
              }}
            >
              {course.endDate} Fall 2023 Semester Full Term
            </p>
            <BsClipboardData style={{ color: "gray" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
