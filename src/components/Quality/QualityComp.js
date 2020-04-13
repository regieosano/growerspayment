import React, { useState } from "react";

import "./QualityComp.scss";

import { Card, CardBody } from "reactstrap";

import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProcRecLot from "./Parts/ProcRec/ProcRecLot";
import KernelShellDefects from "./Parts/KernelShell/KernelShellDefects";
import WeightsMoisture from "../Quality/Parts/WeightsMoisture/WeightsMoisture";
import ProcessButtons from "../Quality/Parts/MenuButtons/ProcessButtons";
import XModal from "../Modals/BaseModal/XModal";

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

  const printReportsBodyContent = <h6>Generate PDF Report?</h6>;

  const togglePrintModal = (e) => {
    console.log(e.target.name);
    setIsOpenPrintDialogModal(!isOpenPrintDialogModal);
  };

  const handleGeneratePDF = (e) => {
    console.log(e.target.name);
    togglePrintModal();
  };

  return (
    <>
      {/*Print Dialog Modal  */}
      <XModal
        isModalOpen={isOpenPrintDialogModal}
        modalSize={"md"}
        modalBody={printReportsBodyContent}
        modalTitle={"Print Reports"}
        modalId={"modalTitle"}
        buttonHappyText={"Proceed"}
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
                <ProcessButtons handlePrintResults={handleGeneratePDF} />
              </section>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default QualityComp;
