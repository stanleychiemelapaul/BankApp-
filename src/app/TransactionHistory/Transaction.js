import React from 'react';
import { Link, useParams } from "react-router-dom";
import Tansactions from './data';

function Transaction() {
  const { Id } = useParams()
  const SingleTransaction = Tansactions.find(Tansaction => Tansaction.id === Id)
  console.log(SingleTransaction);
  return <>
    <div className="col-12 grid-margin" style={{marginRight: "auto", marginLeft: "auto", maxWidth: "700px"}}>
      <div className="card">
        <div className="card-body">
          <Link to="/history/transferhistory" className='btn' style={{background: "white", color: "#3f0326"}}>Go Back</Link>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th colSpan="2" className='text-center text-white font-weight-bolder display-1'><h3>Transaction Details</h3> </th>
                </tr>
              </thead>
              <tbody style={{color: "#faebf4"}}>
                
                <tr>
                  <th>Transaction Reference ID</th>
                  <td>{SingleTransaction.Id}</td>
                </tr>
                <tr>
                  <th>Date of Transaction</th>
                  <td>{SingleTransaction.DateofTransaction}</td>
                </tr>
                <tr>
                  <th>Beneficiary Account Number</th>
                  <td>{SingleTransaction.BeneficiaryAccount}</td>
                </tr>
                <tr>
                  <th>Amount Transferred</th>
                  <td>&#8358;{SingleTransaction.Amount}</td>
                </tr>
                <tr>
                  <th>Payment Status</th>
                  <td>{SingleTransaction.Paystatus}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Transaction;




