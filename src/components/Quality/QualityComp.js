import React, { useState } from "react";

import axios from "axios";

import { saveAs } from "file-saver";

import "./QualityComp.scss";

import { Card, CardBody } from "reactstrap";

import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProcRecLot from "./Parts/ProcRec/ProcRecLot";
import KernelShellDefects from "./Parts/KernelShell/KernelShellDefects";
import WeightsMoisture from "../Quality/Parts/WeightsMoisture/WeightsMoisture";
import ProcessButtons from "../Quality/Parts/MenuButtons/ProcessButtons";
import XModal from "../Modals/BaseModal/XModal";

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

  const processGenerateText = "Generate PDF";

  const [isOpenPrintDialogModal, setIsOpenPrintDialogModal] = useState(false);
  const [isDisableButton, setIsDisableButton] = useState(false);
  const [buttonTextGeneratePDF, setButtonTextGeneratePDF] = useState(
    processGenerateText
  );

  const printReportsBodyContent = <SummaryInHTML />;

  const togglePrintModal = ({ target: { name } }) => {
    if (name === "printResults") {
      setIsOpenPrintDialogModal(!isOpenPrintDialogModal);
      setButtonTextGeneratePDF(processGenerateText);
      setIsDisableButton(false);
    }
    if (name === "cancel") {
      setIsOpenPrintDialogModal(!isOpenPrintDialogModal);
      // Logic to stop the current process which is generating the PDF
    }

    if (name === "generateReport") {
      setIsDisableButton(true);
      setButtonTextGeneratePDF("Generating PDF...");
      axios
        .post("http://localhost:7700/create-pdf", {
          r_section1: "Regie's Section #1",
          r_section2: "Regie's Section #2",
        })
        .then(() => {
          axios
            .get("http://localhost:7700/fetch-pdf", {
              responseType: "blob",
            })
            .then((res) => {
              const pdfBlob = new Blob([res.data], { type: "application/pdf" });

              saveAs(pdfBlob, "summarylab.pdf");

              setIsOpenPrintDialogModal(!isOpenPrintDialogModal);
            });
        })

        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {/*Print Dialog Modal  */}
      <XModal
        isModalOpen={isOpenPrintDialogModal}
        modalSize={"md"}
        modalBody={printReportsBodyContent}
        modalTitle={"Summary Lab Report"}
        modalId={"modalTitle"}
        buttonHappyText={buttonTextGeneratePDF}
        buttonSadText={"Cancel"}
        onHandleToggleModal={togglePrintModal}
        isDisableButton={isDisableButton}
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
