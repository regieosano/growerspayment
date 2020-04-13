import React from "react";

import {
  faTachometerAlt,
  faFileDownload,
  faClipboardList,
  faFileInvoiceDollar,
  faClipboardCheck,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AppSideBar.scss";

function AppSideBar() {
  const menuTitles = [
    "RECEIVING",
    "QUALITY",
    "DELIVERIES",
    "PAYMENTS",
    "USERS",
  ];

  const dashBoardIcon = <FontAwesomeIcon icon={faTachometerAlt} size={"2x"} />;
  const receivingIcon = <FontAwesomeIcon icon={faFileDownload} size={"2x"} />;
  const qualityIcon = <FontAwesomeIcon icon={faClipboardCheck} size={"2x"} />;
  const deliveryIcon = <FontAwesomeIcon icon={faClipboardList} size={"2x"} />;
  const paymentIcon = (
    <FontAwesomeIcon icon={faFileInvoiceDollar} size={"2x"} />
  );

  const usersIcon = <FontAwesomeIcon icon={faUser} size={"2x"} />;
  const settingsIcon = <FontAwesomeIcon icon={faCog} size={"2x"} />;

  const iconsArray = [
    receivingIcon,
    qualityIcon,
    deliveryIcon,
    paymentIcon,
    usersIcon,
  ];
  return (
    <>
      <div className='sidebar'>
        <ul>
          <li className='list-option-format'>
            <span id='icon-format'> {dashBoardIcon}</span>
            <span id='dashboard-format'>DASHBOARD</span>
          </li>
          {menuTitles.map((title, index) => {
            return (
              <li key={index} className='list-option-format'>
                <span id='icon-format'> {iconsArray[index]}</span>
                <span className='title-format'>{title}</span>
              </li>
            );
          })}
          <li className='list-option-format'>
            <span id='icon-format'>{settingsIcon}</span>
            <span id='settings-format'>SETTINGS</span>
          </li>
          <li className='list-option-format'></li>
        </ul>
      </div>
    </>
  );
}

export default AppSideBar;
