import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h3 className=" text-4xl font-semibold">
        {props.title1} <span className=" text-NavBlue"></span>
      </h3>
    </div>
  );
};

export default Heading;