import React from "react";

const SpecificationList = ({ specifications }) => {
  return (
    <dl className="specification-list">
      {specifications &&
        specifications.map((i) => (
          <>
            <dt>{i.specificationName}</dt>
            <dd>{i.specificationValue}</dd>
          </>
        ))}
    </dl>
  );
};

export default SpecificationList;
