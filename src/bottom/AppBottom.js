import React from "react";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

export default function AppBottom(props) {
  return (
    <div className="AppBottom">
      <BottomLeft city={props.city} />
      <BottomRight />
    </div>
  );
}
