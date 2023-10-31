import React, { useState } from "react";

function StringStateVariables() {
  const [firstname, setFirstname] = useState("John");
  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstname}</p>
      <input
        className="form-control"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
    </div>
  );
}

export default StringStateVariables;
