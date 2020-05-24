import React, { useEffect } from "react";

const Tabs = ({ tabs }) => {
  useEffect(() => {
    let tabNodes = document.querySelectorAll(".tab");
    tabNodes[0].classList.add("tab-active");
  }, []);

  const handleTabs = (e) => {
    let tabNodes = document.querySelectorAll(".tab");
    if (!e.target.className.includes("product-tabs")) {
      const changeTabs = (data) => {
        document.querySelector(".tabs-data > .container").innerHTML = data;
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
    }
  };

  return (
    <section className="tabs">
      <div
        className="product-tabs"
        onClick={(e) => {
          handleTabs(e);
        }}
      >
        {tabs.map((i) => {
          return <div className="tab">{Object.getOwnPropertyNames(i)}</div>;
        })}
      </div>
      <div className="tabs-data">
        <div className="container">{Object.values(tabs[0])}</div>
      </div>
    </section>
  );
};

export default Tabs;
