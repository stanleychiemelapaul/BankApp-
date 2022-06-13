import React from 'react';
import { useRef, useState,  useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';
import './fundtransfer.css';



const ACCOUNT_VALREGEX = /^[0-9]{10,15}$/;
const AMOUNT_VALREGEX = /^[0-9]*$/;

export default function FundTransfer() {
  const errRef = useRef();

  const [customeremail, setcustomeremail] = useState('');

  const [Beneficiaryaccount, setBeneficiaryaccount] = useState('');
  
  const [BeneficiaryBank, setBeneficiaryBank] = useState('');

  const [amt, setamt] = useState('');

  const [errMsg, setErrmsg] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(() =>{
    console.log(customeremail);
    setcustomeremail(customeremail)
  }, [customeremail])


  useEffect(() =>{
    console.log(Beneficiaryaccount);
    setBeneficiaryaccount(Beneficiaryaccount)
  }, [Beneficiaryaccount])

  useEffect(() =>{
    console.log(BeneficiaryBank);
    setBeneficiaryBank(BeneficiaryBank)
  }, [BeneficiaryBank])

  useEffect(() =>{
    console.log(amt);
    setamt(amt)
  }, [amt])

  useEffect(() =>{
    setErrmsg('')
  }, [Beneficiaryaccount, amt, customeremail])

 const handleSubmit = async (e) =>{
   e.preventDefault();
   
   const bacctno = ACCOUNT_VALREGEX.test(Beneficiaryaccount);
   if (!bacctno) {
     setErrmsg("Invalid Beneficiary Account Number");
     return;
   }
   const amttopay = AMOUNT_VALREGEX.test(amt);
   if (!amttopay) {
      setErrmsg("Payment Amount must be a figure between 100 and 10000000");
      return;
    }
   if (amttopay >= 100 || amttopay <= 10000000) {

   }else{
    setErrmsg("Invalid Payment Range");
    return;
   }

   
   setSuccess(true);
 }

  const config = {
    reference: (new Date()).getTime().toString(),
    email: customeremail,
    amount: Number(amt) * 10,
    publicKey: 'pk_test_d4106d45a08e0c3e6f0450c167ca721216762d22',
  };

  const onSuccess = (reference) => {
    // Backend development to save record of transaction
    console.log(reference);
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
    alert("Dialog Box closed");
  }

  const PayButton = () => {
    const initializePayment = usePaystackPayment(config);
      return (
        <div className="text-center d-flex justify-content-center">
          <button className="submitbtn btn mr-2" onClick={() => {
            initializePayment(onSuccess, onClose)
          }}>Pay Now</button>
        </div>
      );
  };

  return (
    <>
      <div className="page-header">
        <h3 className="page-title" style={{color: "#4e0731"}}>Fund Transfer </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" ><Link to="/dashboard" style={{color: "black"}}>Dashboard</Link></li>
            <li className="breadcrumb-item active" aria-current="page" style={{color: "#4e0731"}}>Fund Transfer</li>
          </ol>
        </nav>
      </div>
      <div className="d-flex align-content-center justify-content-center grid-margin" style={{maxWidth: "600px", marginRight: "auto", marginLeft: "auto"}}>
        {success ? (
          <div className="card col-12 " style={{borderRadius: "40px"}}>
            <div className="card-body">
              <h3 className="card-title text-center">
                <i className="mdi mdi-bank"></i>
                Fund Transfer
              </h3>
              <p>You are about to initialize payment with the following details</p>

              <table className="table">
                <tbody>
                  <tr style={{color: "#faebf4"}}>
                    <th> Beneficiary Account Number</th>
                    <td>{Beneficiaryaccount}</td>
                  </tr>
                  <tr style={{color: "#faebf4"}}>
                    <th> Beneficiary Bank</th>
                    <td>{BeneficiaryBank}</td>
                  </tr>
                  <tr style={{color: "#faebf4"}}>
                    <th>Amount  </th>
                    <td>&#8358;{amt}</td>
                  </tr>
                </tbody>
              </table>

              <p>Click Pay Now to proceed</p>
              <PayButton/>
            </div>
          </div>
            
        ) : (
          <form className="card col-12 " style={{borderRadius: "40px"}}>
            <div className="card-body">
              <h3 className="card-title text-center">
                <i className="mdi mdi-bank"></i>
                Fund Transfer
              </h3>
              <p ref={errRef} className={errMsg ? "alert alert-danger" : "offscreen"} aria-live="assertive">{errMsg}</p>

              <div className="card-header d-flex justify-content-center text-dark font-weight-bolder mb-4" style={{background: "#faebf4", borderRadius: "10px"}}>Payment Range: 
                <span className='ml-3'>&#8358;100  to  &#8358;10,000,000</span> 
              </div>

              <form onSubmit={handleSubmit}>
                <Form.Group>
                  <label htmlFor="customeremail">Sender Email Address</label>
                  <Form.Control type="email"  required
                  className="form-control" 
                  id="customeremail" 
                  
                  onChange = {(e) => setcustomeremail(e.target.value)}
                  />
                </Form.Group>
                  
                <Form.Group>
                  <label htmlFor="listofbanks">Select Beneficiary Bank</label>
                  <select required onChange={(e) => setBeneficiaryBank(e.target.value)} className="form-control" id="listofbanks">
                    <option value="">Select Beneficiary Bank</option>
                    <option value="GT Bank">GT Bank</option>
                    <option value="First Bank">First Bank</option>
                    <option value="Fidelity Bank">Fidelity Bank</option>
                    <option value="Access Bank">Access Bank</option>
                    <option value="Wema Bank">Wema Bank</option>
                    <option value="Heritage Bank">Heritage Bank</option>
                    <option value="Ecobank">Ecobank</option>
                    <option value="Stanbic IBTC Bank">Stanbic IBTC Bank</option>
                    <option value="Polaris Bank">Polaris Bank</option>
                    <option value="Providus Bank">Providus Bank</option>
                    <option value="First Bank">First Bank</option>
                  </select>
                </Form.Group>
              
                <Form.Group>
                  <label htmlFor="Beneficiaryaccount">Beneficairy Account Number</label>
                  <input 
                    type="number"  
                    className="form-control" 
                    min="0" 
                    id="Beneficiaryaccount" 
                    onChange={(e)=> setBeneficiaryaccount(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="Amount">Amount</label>
                  <div className="input-group" id='Amount'>
                    <div className="input-group-prepend">
                      <span className="input-group-text text-white" style={{backgroundColor: "#3f0326", fontWeight: 800}}>&#8358;</span>
                    </div>
                    <Form.Control type="number" 
                      className="form-control" 
                      min="100" 
                      max="10000000" 
                      required
                      placeholder='Enter Amount'
                      onChange={(e) => setamt(e.target.value)} 
                    />
                    
                  </div>
                </Form.Group>
                <div className="text-center d-flex justify-content-center">
                  <button type="submit" 
                  className="submitbtn btn mr-2">Submit</button>
                </div>
              </form>
            </div>
          </form>
        )}
      </div>
    </>
  )
}
