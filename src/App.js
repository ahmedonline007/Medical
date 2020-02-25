import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      case1: 0,
      case2: 0,
      case3: 0,
      case4: 0,
      case5: 0,
      viewTable: false,
      viewMedicals: false,
      sumCases: 0
    }
  }

  renderDocument() {
    let sum = parseFloat(this.state.case1) + parseFloat(this.state.case2) + parseFloat(this.state.case3) + parseFloat(this.state.case4) + parseFloat(this.state.case5);
    this.setState({ sumCases: sum, viewTable: true });
  }

  renderMedicals() {
    this.setState({ viewMedicals: true });
  }

  render() {
    return (

      <div className="container">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Case One</label>
            <input type="email" className="form-control" id="exampleInputEmail1" onChange={e => this.setState({ case1: e.target.value })} value={this.state.case1} aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Case Two</label>
            <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.case2} onChange={e => this.setState({ case2: e.target.value })} aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Case Three</label>
            <input type="email" className="form-control" value={this.state.case3} onChange={e => this.setState({ case3: e.target.value })} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Case Four</label>
            <input type="email" className="form-control" value={this.state.case4} onChange={e => this.setState({ case4: e.target.value })} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Case Five</label>
            <input type="email" className="form-control" value={this.state.case5} onChange={e => this.setState({ case5: e.target.value })} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <button type="button" className="btn btn-primary" onClick={() => { this.renderDocument() }}>Submit</button>

          <div className="form-group">
            <label for="exampleInputPassword1">Total</label>
            <input type="email" className="form-control" value={this.state.sumCases} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        </form>
        <div style={{ margin: '0 20px', overflowX: 'auto' }}>
          {this.state.viewTable ?
            <div>
              <h2>التشخيص</h2>
              <table className="attachmentTable">
                <thead>
                  <tr>
                    <th>
                      <div className="headCell tableCell-1">
                        <span>Type.</span>
                      </div>
                    </th>
                    <th>
                      <div className="headCell tableCell-2">
                        <span>Subject </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="nameOfAttach">
                      <div className="contentCell tableCell-1" onClick={() => this.renderMedicals()}>
                        <span className="pdfImage">
                          1.
                                                </span>
                      </div>
                    </td>
                    <td>
                      <div className="contentCell tableCell-2" onClick={() => this.renderMedicals()}>
                        <a className="pdfPopup various zero">تشخيص 1 </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="contentCell tableCell-1" onClick={() => this.renderMedicals()}>
                        <span className="pdfImage">
                          2.
                                                </span>
                      </div>
                    </td>
                    <td>
                      <div className="contentCell tableCell-2" onClick={() => this.renderMedicals()}>
                        <a className="pdfPopup various zero">تشخيص 2</a>
                      </div>
                    </td>

                  </tr>
                  <tr>
                    <td>
                      <div className="contentCell tableCell-1" onClick={() => this.renderMedicals()}>
                        <span className="pdfImage">
                          3.
                                                </span>
                      </div>
                    </td>
                    <td>
                      <div className="contentCell tableCell-2" onClick={() => this.renderMedicals()}>
                        <a className="pdfPopup various zero">تشخيص 3 </a>
                      </div>
                    </td>

                  </tr>
                  <tr>
                    <td>
                      <div className="contentCell tableCell-1" onClick={() => this.renderMedicals()}>
                        <span className="pdfImage">
                          4.
                                                </span>
                      </div>
                    </td>
                    <td>
                      <div className="contentCell tableCell-2" onClick={() => this.renderMedicals()}>
                        <a className="pdfPopup various zero">تشخيص 4</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> : null
          }   </div>

        <div style={{ margin: '0 20px', overflowX: 'auto' }}>
          {this.state.viewMedicals ?
            <div>
              <h2>Medicals</h2>
              <table className="attachmentTable">
                <thead>
                  <tr>
                    <th>
                      <div className="headCell tableCell-1">
                        <span>Type.</span>
                      </div>
                    </th>
                    <th>
                      <div className="headCell tableCell-2">
                        <span>Subject </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="nameOfAttach">
                      <div className="contentCell tableCell-1">
                        <span className="pdfImage">
                          1.
                                                </span>
                      </div>
                    </td>
                    <td>
                      <div className="contentCell tableCell-2">
                        <a className="pdfPopup various zero">Medical 1</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="contentCell tableCell-1">
                        <span className="pdfImage">
                          2.
                                                </span>
                      </div>
                    </td>
                    <td>
                      <div className="contentCell tableCell-2">
                        <a className="pdfPopup various zero">Medical 2</a>
                      </div>
                    </td>

                  </tr>
                  <tr>
                    <td>
                      <div className="contentCell tableCell-1">
                        <span className="pdfImage">
                          3.
                                                </span>
                      </div>
                    </td>
                    <td>
                      <div className="contentCell tableCell-2">
                        <a className="pdfPopup various zero">Medical 3 </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="contentCell tableCell-1">
                        <span className="pdfImage">
                          4.
                                                </span>
                      </div>
                    </td>
                    <td>
                      <div className="contentCell tableCell-2">
                        <a className="pdfPopup various zero">Medical 4</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table></div> : null
          }   </div>

      </div>
    )
  }
}

export default App;
