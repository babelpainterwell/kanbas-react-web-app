import ModuleListItem from "./ModuleListItem";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "../modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  // const modules = db.modules;
  // console.log(modules);
  // const [modules, setModules] = useState(db.modules);
  // const initialModule = {
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // };
  // const [module, setModule] = useState(initialModule);
  // const addModule = (module) => {
  //   setModules([
  //     ...modules,
  //     { ...module, _id: new Date().getTime().toString() },
  //   ]);
  //   setModule(initialModule);
  // };
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter((module) => module._id !== moduleId));
  // };
  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  //   setModule(initialModule);
  // };

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
            // onChange={(e) =>
            //   setModule({
            //     ...module,
            //     description: e.target.value,
            //   })
            // }
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          ></textarea>
        </div>
      </div>
      <button
        className="btn btn-danger mb-3"
        // onClick={() => {
        //   addModule(module);
        // }}
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
      >
        Add
      </button>
      <button
        className="btn btn-success mb-3 ms-2"
        // onClick={updateModule}
        onClick={() => dispatch(updateModule(module))}
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
