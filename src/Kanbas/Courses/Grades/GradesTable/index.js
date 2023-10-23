import db from "../../../Database";
import { BsArrowBarRight } from "react-icons/bs";

function GradesTable({ assignments, enrollemnts }) {
  return (
    <div className="table-responsive mt-3 mb-5" style={{ maxWidth: "1200px" }}>
      <table className="table table-striped table-hover w-auto wd-custom-table-bordered">
        <thead>
          <tr className="d-flex">
            <th
              style={{ color: "black", verticalAlign: "middle" }}
              className="col-2"
            >
              Student Name
            </th>
            {assignments.map((assignment) => (
              <th style={{ verticalAlign: "middle" }} className="col-1-5">
                {assignment.title} <br />
                <small>Out of 100</small>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {enrollemnts.map((enrollemnt) => {
            const user = db.users.find((user) => user._id === enrollemnt.user);
            return (
              <tr className="d-flex">
                <td className="col-2">
                  {user.firstName} {user.lastName}
                </td>
                {assignments.map((assignment) => {
                  const grade = db.grades.find(
                    (grade) =>
                      grade.student === enrollemnt.user &&
                      grade.assignment === assignment._id
                  );
                  //   return <td className="col-1-5">{grade?.grade || "N/A"}</td>;
                  return grade ? (
                    <td className="col-1-5">{grade.grade}</td>
                  ) : (
                    <td className="col-1-5 d-flex align-items-center">
                      <input
                        type="text"
                        className="form-control me-1"
                        value="N/A"
                      />
                      <BsArrowBarRight
                        style={{ color: "darkgray" }}
                        size={18}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GradesTable;
