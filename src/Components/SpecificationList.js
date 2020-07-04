import React, { Fragment } from "react";

const SpecificationList = ({ specifications }) => {
  return (
    <dl className="specification-list">
      {specifications &&
        specifications.map((i, j) => (
          <Fragment key={i.specificationName}>
            <dt>{i.specificationName}</dt>
            <dd>{i.specificationValue}</dd>
          </Fragment>
        ))}
    </dl>
  );
};

export default SpecificationList;
