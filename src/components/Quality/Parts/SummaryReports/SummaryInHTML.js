import React from "react";

import "./SummaryInHTML.scss";

function SummaryInHTML({ weightIn, weightOut, debris, moistureTestArr }) {
  const dateReceived = "01/01/2020";

  return (
    <>
      <div>
        <h6>Sample Received: {dateReceived}</h6>
      </div>
      <div id='test-data'>
        <h5>Test# 19-0820</h5>
      </div>
      <form>
        {/* Grower */}
        <label htmlFor='grower' className='label-font-size'>
          Grower
        </label>
        <input id='grower' />
        <label htmlFor='company' id='comp-label' className='label-font-size'>
          Company
        </label>
        <input id='company' />
        <br />
        {/* Lot */}
        <label htmlFor='lot-no' className='label-font-size'>
          Lot#
        </label>
        <input id='lot-no' />
        <label htmlFor='sample' id='comp-label' className='label-font-size'>
          Sample
        </label>
        <input id='sample' />
        <br />
        {/* Variety */}
        <label htmlFor='variety' className='label-font-size'>
          Variety
        </label>
        <input id='variety' />
        <label
          htmlFor='additional-test'
          id='comp-label'
          className='label-font-size'>
          Additional Test
        </label>
        <input id='additional-test' />
        {/* End */}
      </form>
      <hr className='thick-line' />
      <div>
        <table id='first-table'>
          <tbody>
            <tr className='header-position'>
              <th></th>
              <th>Weight</th>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>
                Weight Received &nbsp;
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>{weightIn}</span>
              </td>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>
                Debris &nbsp;
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>{debris}</span>
              </td>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>
                Weight Out &nbsp;
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>{weightOut}</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table id='second-table'>
          <tbody>
            <tr className='header-position'>
              <th></th>
              <th>Moisture</th>
              <th>Wt. Tested</th>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>1 &nbsp;</td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>{moistureTestArr[0]}</span>
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>0</span>
              </td>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>2 &nbsp;</td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>{moistureTestArr[1]}</span>
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>0</span>
              </td>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>3 &nbsp;</td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>{moistureTestArr[2]}</span>
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>0</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr className='thick-line' />
      <table className='kernel-table'>
        <tbody>
          <tr className='header-position'>
            <th>Kernel Defects</th>
            <th>Test 1</th>
            <th>Test 2</th>
            <th>Test 3</th>
          </tr>
          <tr>
            <td className='align-right-data label-font-size'>Worm &nbsp;</td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
          </tr>
          <tr>
            <td className='align-right-data label-font-size'>Rancid &nbsp;</td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
          </tr>
          <tr>
            <td className='align-right-data label-font-size'>Mold &nbsp;</td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
          </tr>
          <tr>
            <td className='align-right-data label-font-size'>Decay &nbsp;</td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
          </tr>
          <tr>
            <td className='align-right-data label-font-size'>
              Serious Damage &nbsp;
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
          </tr>
          <tr>
            <td className='align-right-data label-font-size'>Blanks &nbsp;</td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
          </tr>
          <tr>
            <td className='align-right-data label-font-size'>
              Off Color &nbsp;
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
          </tr>
          <tr>
            <td className='align-right-data label-font-size'>Shrivel &nbsp;</td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
            <td className='box-include label-font-size'>
              <span className='adjust-margin'>0</span>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div>
        <table id='shell-first-table'>
          <tbody>
            <tr className='header-position'>
              <th>Shell Out</th>
              <th>Test 1</th>
              <th>Test 2</th>
              <th>Test 3</th>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>
                In-Shell &nbsp;
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>-</span>
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>-</span>
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>-</span>
              </td>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>
                Kernel &nbsp;
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>-</span>
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>-</span>
              </td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>-</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table id='sizing-second-table'>
          <tbody>
            <tr className='header-position'>
              <th></th>
              <th>Sizing</th>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>1 &nbsp;</td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>-</span>
              </td>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>2 &nbsp;</td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>-</span>
              </td>
            </tr>
            <tr>
              <td className='align-right-data label-font-size'>3 &nbsp;</td>
              <td className='box-include label-font-size'>
                <span className='adjust-margin'>-</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <form>
          <label htmlFor='tester' className='label-font-size'>
            Tester:
          </label>
          <input id='tester' />
          <label htmlFor='dateTested' className='label-font-size'>
            Date Tested:
          </label>
          <input id='date-tested' />
        </form>
      </div>
    </>
  );
}

export default SummaryInHTML;
