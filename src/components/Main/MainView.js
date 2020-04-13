import React from "react";

import "./MainView.scss";

import TopNavBar from "../Navigation/TopNavBar";
import AppSideBar from "../SideBar/AppSideBar";
import QualityComp from "../Quality/QualityComp";

function MainView() {
  return (
    <>
      <div className='main-container'>
        <section className='item header'>
          <TopNavBar />
        </section>
        <section className='item menu'>
          <AppSideBar />
        </section>
        <section className='item content'>
          <QualityComp />
        </section>
      </div>
    </>
  );
}

export default MainView;
