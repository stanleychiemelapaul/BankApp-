import React from 'react';

export default function Notifications() {
  return <>
        <div id='notifications' className="col-md-8 grid-margin stretch-card" >
            <div className="card">
                <div className="card-body" style={{maxHeight: "400px", overflowY: "auto", scrollbarWidth: "thin"}}>
                    <div className="d-flex flex-row justify-content-between">
                        <h4 className="card-title mb-1">Notifications</h4>
                    </div>
                    <hr style={{borderColor: "#fff"}}/>
                    <div className="row" >
                        <div className="col-12">
                            <div className="preview-list">
                                <div className="preview-item ">
                                    <div className="preview-item-content d-sm-flex flex-grow">
                                        <div className="flex-grow">
                                            <h6 className="preview-subject">Log in Notification </h6>
                                            <p className="text-muted mb-0">A login Occurred in your ...</p>
                                        </div>
                                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                            <p className="text-muted">15 minutes ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{borderColor: "#fff"}}/>
                            <div className="preview-item ">
                                <div className="preview-item-content d-sm-flex flex-grow">
                                    <div className="flex-grow">
                                        <h6 className="preview-subject">Transfer of $230 Occurred</h6>
                                        <p className="text-muted mb-0">Transferred occurred on your account</p>
                                    </div>
                                    <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                        <p className="text-muted">1 hour ago</p>
                                    </div>
                                </div>
                            </div>
                            <hr style={{borderColor: "#fff"}}/>
                            <div className="preview-item ">
                                <div className="preview-item-content d-sm-flex flex-grow">
                                <div className="flex-grow">
                                    <h6 className="preview-subject">Transfer Charges</h6>
                                    <p className="text-muted mb-0">You have been charged...</p>
                                </div>
                                <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                    <p className="text-muted">35 minutes ago</p>
                                </div>
                                </div>
                            </div>
                            <hr style={{borderColor: "#fff"}}/>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>;
}
