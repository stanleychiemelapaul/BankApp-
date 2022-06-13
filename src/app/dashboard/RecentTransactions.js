import React from 'react';
import './RecentTransaction.css';
import TransactionsList from '../TransactionHistory/TransactionsList';




function RecentTransactions() {
  return <>
        <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Transaction</h4>
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

export default RecentTransactions;
