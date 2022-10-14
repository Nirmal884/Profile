import React, { Fragment } from 'react'
import { SiCodesandbox, SiGit} from 'react-icons/si';
import {GoCloudDownload} from 'react-icons/go'
import NirmalResume from '../assets/NirmalResume.pdf'

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row slide-in-bottom">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">NIRMAL BABU</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row slide-in-bottom">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">React Developer</h4>
                                <h6 className="blue-label px-2 py-1">Aug 2022 </h6>
                                <p className="m-0">SysArt Technologies : Full-time</p>
                                <p>Kerala, Calicut, India</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red"> Quality Engineer</h4>
                                <h6 className="blue-label px-2 py-1">Dec 2020 - Feb 2021</h6>
                                <p className="m-0">Salzer Electronics : Internship</p>
                                <p>Coimbatore, TamilNadu, India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BE - Electronics And Communication</h4>
                                <h6 className="blue-label px-2 py-1">2018 - 2022</h6>
                                <p className="m-0">Anna University</p>
                                <p>CGPA: 7.50</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2016-2018</h6>
                                <p className="m-0">St.Mary's Higher Secondary School</p>
                                <p>Grade: 83.33 %</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row slide-in-top">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://codesandbox.io/dashboard/home?workspace=70b70024-1ccd-486c-836f-7bde36078010" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodesandbox className="zoom-on-hover"/>
                            </a> 
                            <a href="https://github.com/Nirmal884" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiGit className="zoom-on-hover"/>
                            </a> 
                            <a href={NirmalResume} download target="/blank" className="text-white text-decoration-none mx-2">
                                <GoCloudDownload className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Resume