import ClipLoader from "react-spinners/ClipLoader";
import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__inner">
        <ClipLoader size={150} />
      </div>
    </div>
  );
};

export default Loader;
