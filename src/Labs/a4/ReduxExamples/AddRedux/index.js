import { useSelector, useDispatch } from "react-redux";
import { add } from "./addReducer";
import { useState } from "react";

function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(13);
  const { sum } = useSelector((state) => state.addReducer); // get the initial value of sum in the reducer
  const dispatch = useDispatch();

  return (
    <div className="w-25">
      <h1>Add Redux</h1>
      <h2>
        {a} + {b} = {sum}
      </h2>
      <input
        className="form-control"
        onChange={(e) => setA(parseInt(e.target.value))}
        type="number"
        value={a}
      />
      <input
        className="form-control"
        onChange={(e) => setB(parseInt(e.target.value))}
        type="number"
        value={b}
      />
      <button
        className="btn btn-primary"
        onClick={() => dispatch(add({ a, b }))}
      >
        Caculate the Sum
      </button>
    </div>
  );
}

export default AddRedux;
