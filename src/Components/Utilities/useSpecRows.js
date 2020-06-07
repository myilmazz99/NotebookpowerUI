import React, { useState, useEffect } from "react";

const useSpecRows = () => {
  const [specRowCount, setSpecRowCount] = useState(1);
  const [displaySpecRow, setDisplaySpecRow] = useState([]);
  const [specArr] = useState([]);

  useEffect(() => {
    setDisplaySpecRow(
      Array(specRowCount).fill(
        <>
          <div className="col-6 mt-3">
            <input
              defaultValue=""
              type="text"
              name="specificationName[]"
              placeholder="Donanım Adı, ö. GPU"
              className="form-control"
            />
          </div>
          <div className="col-6 mt-3">
            <input
              defaultValue=""
              type="text"
              name="specificationValue[]"
              placeholder="Donanım, ö. GTX 1050"
              className="form-control"
            />
          </div>
        </>
      )
    );
  }, [specRowCount]);

  const getRowValues = (specifications = []) => {
    let specNames = document.querySelectorAll(
      'input[name="specificationName[]"]'
    );
    let specValues = document.querySelectorAll(
      'input[name="specificationValue[]"]'
    );

    for (let i = 0; i < specNames.length; i++) {
      var found = specifications.find(
        (i) =>
          i.specificationName === specNames[i].value &&
          i.specificationValue === specValues[i].value
      );
      if (!found) {
        specArr.push({
          specificationName: specNames[i].value,
          specificationValue: specValues[i].value,
        });
      }
    }

    return specArr;
  };

  return {
    displaySpecRow,
    setSpecRowCount,
    getRowValues,
  };
};

export default useSpecRows;
