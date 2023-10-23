import ModuleListItem from "./ModuleListItem";
import React from "react";
import { useParams } from "react-router-dom";
import db from "../../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  console.log(modules);
  return (
    <div>
      {modules
        .filter((module) => module.course === courseId)
        .map((module) => (
          <ModuleListItem module={module} />
        ))}
    </div>
  );
}

export default ModuleList;
