import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Notifications from './Notifications';
import RecentTransactions from './RecentTransactions';
import Statistics from './statistics';

export class Dashboard extends Component {

  transactionHistoryData =  {
    labels: ["Transferred", "Received","Balance"],
    datasets: [{
        data: [50, 20, 90],
        backgroundColor: [
          "yellow","blue","green"
        ]
      }
    ]
  };

  transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
          borderWidth: 0
      }
    },      
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  }

  sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card dashboard-gradient-card">
              <div className="card-body py-0 px-0 px-sm-3">
                <div className="row align-items-center">
                  <div className="col-4 col-sm-3 col-xl-2">
                    <img src={require('../../assets/images/dashboard/Group126@2x.png')} className="gradient-dashboard-img img-fluid" alt="banner" />
                  </div>
                  <div className="col-5 col-sm-7 col-xl-8 p-0">
                    <h4 className="mb-1 mb-sm-0">Welcome to BankApp</h4>
                    <p className="mb-0 font-weight-normal d-none d-sm-block">A Frontend task designed by Stanley Chiemela Paul as task given by TM30 on February 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <Statistics/>
        </div>


        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Monthly Transaction History</h4>
                <div className="aligner-wrapper">
                  <Doughnut data={this.transactionHistoryData} options={this.transactionHistoryOptions} />

                  <div className="absolute center-content">
                    <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">1200</h5>
                    <p className="text-small text-muted text-center mb-0">Total</p>
                  </div>
                </div>  

                <div className="d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3" style={{background: "#faebf4"}}>
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1" style={{color: "#3f0326"}}>Fund Transfer</h6>
                    <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0 text-dark">$236</h6>
                  </div>
                </div>
                <div className="d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3" style={{background: "#faebf4"}}>
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1" style={{color: "#3f0326"}}>Fund Received</h6>
                    <p className="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0 text-dark">$136</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Notifications/>
        </div>
        
        {/* Most Recent Transactions */}
        <div className="row ">
          <RecentTransactions/>
        </div>
      </div> 
    );
  }
}

export default Dashboard;