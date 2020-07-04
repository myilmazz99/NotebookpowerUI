import React, { useState, useEffect } from "react";

const useSpecRows = (removeSpec, productId) => {
  const [specRowCount, setSpecRowCount] = useState(1);
  const [displaySpecRow, setDisplaySpecRow] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [specArr] = useState([]);

  function getSpecId(e, specId) {
    e.preventDefault();
    removeSpec(specId);
  }

  useEffect(() => {
    if (specifications.length === 0)
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

    if (specifications.length > 0)
      setDisplaySpecRow((prev) => [
        ...prev,
        ...Array(1).fill(
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
        ),
      ]);
  }, [specRowCount]);

  useEffect(() => {
    if (specifications.length > 0)
      setDisplaySpecRow(
        specifications.map((i) => (
          <>
            <div className="col-6 mt-3">
              <input
                defaultValue={i.specificationName}
                type="text"
                name="specificationName[]"
                placeholder="Donanım Adı, ö. GPU"
                className="form-control"
              />
            </div>
            <div className="col-5 mt-3">
              <input
                defaultValue={i.specificationValue}
                type="text"
                name="specificationValue[]"
                placeholder="Donanım, ö. GTX 1050"
                className="form-control"
              />
            </div>
            <div className="col-1 mt-3 text-center">
              <button
                className="btn btn-danger"
                onClick={(e) => getSpecId(e, i.id)}
              >
                Sil
              </button>
            </div>
          </>
        ))
      );
  }, [specifications]);

  const getRowValues = (specifications = []) => {
    let specNames = document.querySelectorAll(
      'input[name="specificationName[]"]'
    );
    let specValues = document.querySelectorAll(
      'input[name="specificationValue[]"]'
    );

    for (let i = 0; i < specNames.length; i++) {
      var found = specifications.find(
        (s) =>
          s.specificationName === specNames[i].value &&
          s.specificationValue === specValues[i].value
      );
      if (!found && specValues[i].value !== "" && specNames[i].value !== "") {
        specArr.push({
          specificationName: specNames[i].value,
          specificationValue: specValues[i].value,
        });
      }
    }

    return specArr;
  };

  const getSpecifications = (specifications) => {
    setSpecifications(specifications);
  };

  return {
    displaySpecRow,
    setSpecRowCount,
    getRowValues,
    getSpecifications,
  };
};

export default useSpecRows;
