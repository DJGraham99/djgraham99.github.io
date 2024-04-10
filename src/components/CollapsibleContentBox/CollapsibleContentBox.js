import React, { useState } from 'react';
import './CollapsibleContentBox.css'; 
import { FaChevronDown
} from "react-icons/fa6";

const CollapsibleContentBox = ({ description, secondaryDescription, defaultCollapsed, id, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div id={id} className={`collapsible ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <div className="header" onClick={toggleCollapse}>
        <div className="description"><strong>{description}</strong></div>
        {secondaryDescription ? <div className="secondaryDescription">{secondaryDescription}</div> : ""}
        <img className="arrow" src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="Arrow"/>
      </div>
      <div className={`boxContent ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        {children}
      </div>
    </div>
  );
};

export {CollapsibleContentBox};