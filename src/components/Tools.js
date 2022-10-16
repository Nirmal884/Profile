import React, { Fragment } from 'react'

function Tools() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-secondary slide-in-bottom">Tools I Use</h1>
                            <hr></hr>

                            <div className="row my-2">

                                <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                                    <img className="technology-image  slide-in-bottom-technology" src="../images/vscode.png" alt="VsCode"></img>
                                </div>
                                <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                                    <img className="technology-image  slide-in-bottom-technology" src="../images/npm.png" alt="npm"></img>
                                </div>
                                <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                                    <img className="technology-image  slide-in-bottom-technology" src="../images/git.png" alt="version control"></img>
                                </div>
                                <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                                    <img className="technology-image  slide-in-bottom-technology" src="../images/microsoft-edge.png" alt="Edge"></img>
                                </div>
                                <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                                    <img className="technology-image  slide-in-bottom-technology" src="../images/figma.png" alt="Figma"></img>
                                </div>
                                <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                                    <img className="technology-image  slide-in-bottom-technology" src="../images/github.png" alt="github"></img>
                                </div>
                                <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                                    <img className="technology-image  slide-in-bottom-technology" src="../images/tailwind.png" alt="tailwind"></img>
                                </div>
                                <div className="col-lg-3 col-md-3 py-3 col-sm-4 col-6 d-flex justify-content-center">
                                    <img className="technology-image  slide-in-bottom-technology" src="../images/android.png" alt="android"></img>
                                </div>

                            </div>

                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                  <img className="img-fluid" src="../images/Computer troubleshooting-amico.png" alt="..."></img>
                </div>
                </div>
            </div>
            
        </div>
    </Fragment>
  )
}

export default Tools