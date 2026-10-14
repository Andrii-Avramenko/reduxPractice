import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={(e) => dispatch(increament())}>
        +1
      </button>
      <button type="button" onClick={(e) => dispatch(decreament())}>-1</button>
    </div>
  );
};

export default Counter;
