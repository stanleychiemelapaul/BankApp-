import React from 'react';
import { Link } from 'react-router-dom';
import TransactionsList from './TransactionsList';


export default function Transfers() {
  return <>
  <div className="page-header">
        <h3 className="page-title" style={{color: "#4e0731"}}>Transaction History </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" ><Link to="/dashboard" style={{color: "black"}}>Dashboard</Link></li>
            <li className="breadcrumb-item active" aria-current="page" style={{color: "#4e0731"}}>Transaction history</li>
          </ol>
        </nav>
      </div>
    <div className="col-12 grid-margin">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className='text-white'>
                      <th className='d-none d-sm-none d-md-none d-lg-block'> Transaction ID </th>
                      <th className=''> Beneficiary Account Account</th>
                      <th className=''> Amount</th>
                      <th className='d-none d-sm-none d-md-block d-lg-block'> Transaction Date </th>
                      <th className=''> Payment Status </th>
                      <th className=''> Action </th>
                </tr>
              </thead>
              <TransactionsList/>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>;
}
