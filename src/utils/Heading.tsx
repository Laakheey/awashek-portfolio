import React from "react";

const Heading = ({heading} : {heading: string}): React.JSX.Element => {
  return (
    <>
      <p className="border-t-4 border-[#ef6d58] w-20"></p>
      <p className="font-medium text-2xl uppercase text-[#EF6D58]">
        {heading}
      </p>
    </>
  );
};

export default Heading;
