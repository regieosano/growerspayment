import React, { useState } from "react";

import axios from "axios";

import "./QualityComp.scss";

import { Card, CardBody } from "reactstrap";

import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProcRecLot from "./Parts/ProcRec/ProcRecLot";
import KernelShellDefects from "./Parts/KernelShell/KernelShellDefects";
import WeightsMoisture from "../Quality/Parts/WeightsMoisture/WeightsMoisture";
import ProcessButtons from "../Quality/Parts/MenuButtons/ProcessButtons";
import XModal from "../Modals/BaseModal/XModal";

import { generateReportPDF } from "./../../utility/pdf/GeneratePDF";

import SummaryInHTML from "../../components/Quality/Parts/SummaryReports/SummaryInHTML";

function QualityComp() {
  const qualityLabel = <span className='quality-format'>QUALITY</span>;
  const sample1Label = (
    <span className='font-format' id='sample1'>
      / SAMPLE 1
    </span>
  );
  const qualityTitleIcon = (
    <FontAwesomeIcon icon={faTasks} size={"3x"} color={"green"} />
  );

  const [isOpenPrintDialogModal, setIsOpenPrintDialogModal] = useState(false);

  const printReportsBodyContent = <SummaryInHTML />;

  let report;

  const togglePrintModal = ({ target: { name } }) => {
    if (name === "generateReport") {
      axios.post("http://localhost:7700/create-pdf", {}).then().catch();
    }
    setIsOpenPrintDialogModal(!isOpenPrintDialogModal);
  };

  const handleGeneratePDF = (e) => {
    console.log(e.target.name);
  };

  return (
    <>
      {report}
      {/*Print Dialog Modal  */}
      <XModal
        isModalOpen={isOpenPrintDialogModal}
        modalSize={"lg"}
        modalBody={printReportsBodyContent}
        modalTitle={"Summary Lab Report"}
        modalId={"modalTitle"}
        buttonHappyText={"Generate The Report"}
        buttonSadText={"Cancel"}
        onHandleToggleModal={togglePrintModal}
      />
      {/*End Print Dialog Modal  */}
      <div className='main-card-bg'>
        <Card id='inner-card'>
          <ul className='list-title-icon'>
            <li className='header-format'>{qualityTitleIcon}</li>
            <li className='header-format'>
              {qualityLabel}
              &nbsp; &nbsp;
              {sample1Label}
            </li>
          </ul>
          <CardBody id='card-body'>
            <div id='inner-container'>
              <section className='proc'>
                <ProcRecLot />
              </section>
              <section className='weights'>
                <WeightsMoisture />
              </section>
              <section className='first-line'>
                <hr />
              </section>
              <section className='kernel'>
                <KernelShellDefects />
              </section>
              <section className='final-line'>
                <hr />
              </section>
              <section className='menu-buttons'>
                <ProcessButtons handlePrintResults={togglePrintModal} />
              </section>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default QualityComp;
