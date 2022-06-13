import React from 'react';
import { Link } from 'react-router-dom';
import Tansactions from './data';

function TransactionsList() {
    return (
        <tbody>
            {Tansactions.map((Tansaction) => {
                const {Id, BeneficiaryAccount, Amount, DateofTransaction, Paystatus} = Tansaction;
                return (
                    <tr key={Id} id='payhistorylist' style={{color: "#faebf4"}}>
                        <td className='d-none d-sm-none d-md-none d-lg-block'>{Id}</td>
                        <td className=''> {BeneficiaryAccount} </td>
                        <td className=''> &#8358;{Amount}</td>
                        <td className='d-none d-sm-none d-md-block d-lg-block'>{DateofTransaction}</td>
                        <td>
                            <div className={Paystatus === "Declined" ?  "badge badge-danger" : Paystatus === "Pending" ? "badge badge-warning" :  Paystatus === "Approved" ? "badge badge-success": "hidden" }>{Paystatus}</div>
                        </td>
                        <td>
                            <Link to={`/transaction/${Id}`} className="btn " style={{background: "#faebf4"}}>
                                <span style={{color: "#3f0326"}}>
                                    <i className="mdi mdi-eye" ></i> View 
                                </span>
                            </Link>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
}

export default TransactionsList;
