import React from "react";
import { useDispatch } from "react-redux";
import { incrementState1 } from "../../redux/state1Slice";

const IncrementBtn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(incrementState1());
        }}
      >
        Click to Increment State
      </button>
    </div>
  );
};

export default IncrementBtn;
