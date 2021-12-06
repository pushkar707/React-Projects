import React from "react";
import loading from "../loading.gif";

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <img className="my-3" src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;
