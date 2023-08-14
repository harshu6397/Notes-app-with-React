import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";

import "./Sidebar.scss";
import useWindowSize from "../../hooks/usewindowSize";

const Sidebar = ({ addNote }) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const windowSize = useWindowSize();

  const [listOpen, setListOpen] = useState(false);

  return (
    <>
      {windowSize.width < 768 && (
        <div className="sidebar mx-auto container flex flex-col items-center">
          <div className="sidebar_list_container">
            <ul
              className={`sidebar_list ${
                listOpen ? "sidebar_list_active" : ""
              }`}
            >
              {colors.map((color, index) => {
                return (
                  <li
                    key={index}
                    className="sidebar_list_item"
                    onClick={() => {
                      addNote(color);
                    }}
                  >
                    <div
                      className="sidebar_list_item_color"
                      style={{ backgroundColor: color }}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="side-color-handle"
            onClick={() => {
              setListOpen(!listOpen);
            }}
          >
            <div
              className={`plus ${listOpen ? "rotate-in" : "rotate-back"}`}
              id="plus"
            >
              <FaPlus />
            </div>
          </div>
        </div>
      )}
      {windowSize.width >= 768 && (
        <div className="sidebar mx-auto container pb-20 pt-10 flex flex-col items-center">
          <div
            className="side-color-handle"
            onClick={() => {
              setListOpen(!listOpen);
            }}
          >
            <div
              className={`plus ${listOpen ? "rotate-in" : "rotate-back"}`}
              id="plus"
            >
              <FaPlus />
            </div>
          </div>

          <div className="sidebar_list_container">
            <ul
              className={`sidebar_list ${
                listOpen ? "sidebar_list_active" : ""
              }`}
            >
              {colors.map((color, index) => {
                return (
                  <li
                    key={index}
                    className="sidebar_list_item"
                    onClick={() => {
                      addNote(color);
                    }}
                  >
                    <div
                      className="sidebar_list_item_color"
                      style={{ backgroundColor: color }}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
