import React, { useEffect, useState } from "react";

const Tabs = ({ tabs, tabName }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let tabNodes = document.querySelectorAll(`.${tabName} > .tab`);
    tabNodes[0].classList.add("tab-active");
    setData(Object.values(tabs[0]));
  }, []);

  const handleTabs = (e) => {
    let tabNodes = document.querySelectorAll(`.${tabName} > .tab`);
    const changeTabs = (data) => {
      setData(data);
      e.target.classList.add("tab-active");
    };

    for (var i = 0; i < tabNodes.length; i++) {
      if (tabNodes[i].className.includes("tab-active")) {
        tabNodes[i].classList.remove("tab-active");
      }

      if (e.target.innerText === Object.keys(tabs[i]).toString()) {
        tabNodes[i].classList.add("tab-active");
        changeTabs(Object.values(tabs[i]));
      }
    }
  };

  return (
    <section className="tabs">
      <ul
        className={`tab-container ${tabName}`}
        onClick={(e) => {
          handleTabs(e);
        }}
      >
        {tabs.map((i) => {
          return <li className="tab">{Object.getOwnPropertyNames(i)}</li>;
        })}
      </ul>
      <div className="tabs-data">
        {typeof data === "function" ? data() : data}
      </div>
    </section>
  );
};

export default Tabs;
