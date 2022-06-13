import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const FundTransfer = lazy(() => import('./FundTransfer/FundTransfer'));

const TransferHistory = lazy(() => import('./TransactionHistory/Transfers'));

const TransactionDetails = lazy(() => import('./TransactionHistory/Transaction'));




class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/fundtransfer" component={ FundTransfer } />
          <Route path="/history/transferhistory" component={ TransferHistory } />

          <Route path="/transaction/:id" component={TransactionDetails} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;