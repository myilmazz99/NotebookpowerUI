import React, { useEffect, useRef } from "react";

const Tabs = ({ tabs, tabName }) => {
  const tab = useRef(null);
  const tabData = useRef(null);

  useEffect(() => {
    tab.current.childNodes[0].classList.add("tab-active");
    tabData.current.childNodes[0].classList.add("show");
  }, []);

  const handleTabs = (e) => {
    let tabNodes = tab.current.childNodes;
    let tabDatas = tabData.current.childNodes;

    const changeTabs = (data) => {
      e.target.classList.add("tab-active");
    };

    for (var i = 0; i < tabNodes.length; i++) {
      if (tabNodes[i].className.includes("tab-active")) {
        tabNodes[i].classList.remove("tab-active");
        tabDatas[i].classList.remove("show");
      }

      if (e.target.innerText === Object.keys(tabs[i]).toString()) {
        tabNodes[i].classList.add("tab-active");
        tabDatas[i].classList.add("show");
        changeTabs(Object.values(tabs[i]));
      }
    }
  };

  return (
    <section className="tabs">
      <ul
        ref={tab}
        className="tab-container"
        onClick={(e) => {
          handleTabs(e);
        }}
      >
        {tabs.map((i, j) => {
          return (
            <li key={j} className={`tab tab-${j}`}>
              {Object.getOwnPropertyNames(i)}
            </li>
          );
        })}
      </ul>
      <div className="tabs-data" ref={tabData}>
        {tabs &&
          tabs.map((i, j) => {
            if (typeof Object.values(i)[0] === "string") {
              return (
                <div
                  key={j}
                  dangerouslySetInnerHTML={{ __html: Object.values(i) }}
                  className={`tab-data tab-${j}`}
                ></div>
              );
            } else {
              return (
                <div key={j} className={`tab-data tab-${j}`}>
                  {Object.values(i)}
                </div>
              );
            }
          })}
      </div>
    </section>
  );
};

export default Tabs;
