import React, { Component } from "react";
import "./SpinWheel.scss";
import powerController from "../../Images/power-controller.svg";
import {GoogleSpreadsheet} from 'google-spreadsheet';
import googleCred from '../../Utils/credentials';

const vals = [45, 90, 135, 180, 225, 270, 315, 360];
const bias = 60;

const SHEET_ID = "16mVkxSmar52B5gZB6P0hRBVxjmD-h9m_cgf5-l49NQk";
const ACCESS_TOKEN =
  "ya29.a0AfH6SMDwdpdo97h3QzaDmGsbIv5XyaM4VB1SmXMRtY5k0h_CayCNLqeRuekgkq3qfu5M_DG74KBHkdNXalfg_xsBWRpGZOs1-ogGeRlDnu4CAyh0mewHOi0UWYFVJbqpEgAoYVb09FNR5456Qat2waj4XMItICFXkhw";
/*Token may get expired  */
export default class SpinWheel extends Component {
  moveTheWheel = () => {
    let multiplier = Math.floor(Math.random() * 12) + bias;
    let value = vals[Math.floor(Math.random() * 7)]; //getting the value degree in 45 multiplier
    let rotDeg = value * multiplier;
    document.getElementById("wheelparent").style.transform = `rotate(${
      -1 * Math.abs(rotDeg)
    }deg)`; //anti clock wise logic
    let index = ((Math.abs((rotDeg % 360) - 360) / 45) % 8) + 1;
    this.updateData(index);
  };



  async updateData(index){
    const doc = new GoogleSpreadsheet(SHEET_ID);
    await doc.useServiceAccountAuth({
        client_email: googleCred.client_email,
        private_key: googleCred.private_key
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.setHeaderRow(['web_client', 'timestamp' , 'spin_result_index']);
    await sheet.addRow({ 
        web_client: 'react_pwa', 
        timestamp: Date.now(),
        spin_result_index: index 
    });
    
            
}

  updateSheetValues = (index) => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //update this token with yours.
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          requests: [
            {
              repeatCell: {
                range: {
                  startColumnIndex: 0,
                  endColumnIndex: 1,
                  startRowIndex: 0,
                  endRowIndex: 1,
                  sheetId: 0,
                },
                cell: {
                  userEnteredValue: {
                    numberValue: index,
                  },
                },
                fields: "*",
              },
            },
          ],
        }),
      }
    );
  };

  render() {
    return (
      <div id="wheelcontainer" className="wheelcontainer">
        <div id="wheelparent" className="structure">
          <div id="container45">
            <span id="wheel1" className="segment-1 segment">
              <p>Better luck next time!</p>
            </span>
            <span id="wheel5" className="segment-2 segment">
              <p>₹50 💸</p>
            </span>
            <span id="wheel7" className="segment-3 segment">
              <p>2X Savings</p>
            </span>
            <span id="wheel3" className="segment-4 segment">
              <p>₹100 Cashback</p>
            </span>
          </div>
          <div id="container90">
            <span id="wheel2" className="segment-1 segment">
              <p>2X Savings</p>
            </span>
            <span id="wheel6" className="segment-2 segment">
              <p>1.5X Savings</p>
            </span>
            <span id="wheel8" className="segment-3 segment">
              <p>₹50 💸</p>
            </span>
            <span id="wheel4" className="segment-4 segment">
              <p>₹20 💸</p>
            </span>
          </div>
        </div>

        <button className="movewheel" onClick={this.moveTheWheel}>
          Spin
        </button>
        <div className="controller">
          <img src={powerController} className="responsive-img" onClick={this.moveTheWheel}></img>
        </div>
      </div>
    );
  }
}
