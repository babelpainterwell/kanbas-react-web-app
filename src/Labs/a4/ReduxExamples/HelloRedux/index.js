import { useSelector, useDispatch } from "react-redux";
// this is a componenet that needs global state from redux
function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  return (
    <div>
      <h1>Hello Redux</h1>
      {/* will print out the initial state of the message in the hellpreducer  */}
      <h2>{message}</h2>
    </div>
  );
}
export default HelloRedux;
