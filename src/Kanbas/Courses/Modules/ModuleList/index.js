import ModuleListItem from "./ModuleListItem";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "../modulesReducer";
import * as client from "../client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]); // will do initial rendering and subsequent renderings when courseId changes

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="mb-3">
          <label for="module-name" className="form-label">
            <strong>Module Name</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="module-name"
            value={module.name}
            //
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
        </div>
        <div className="mb-3">
          <label for="module-description" className="form-label">
            <strong>Module Description</strong>
          </label>
          <textarea
            id="module-description"
            type="text"
            className="form-control"
            rows="4"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          ></textarea>
        </div>
      </div>
      <button className="btn btn-danger mb-3" onClick={handleAddModule}>
        Add
      </button>
      <button
        className="btn btn-success mb-3 ms-2"
        // onClick={updateModule}
        onClick={handleUpdateModule}
      >
        Update
      </button>

      {modules
        .filter((module) => module.course === courseId)
        .map((module) => (
          <ModuleListItem
            module={module}
            // deleteModule={deleteModule}
            // setModule={setModule}
          />
        ))}
    </div>
  );
}

export default ModuleList;
