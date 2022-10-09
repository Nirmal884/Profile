import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-success slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Hi!, I am Nirmal a React Developer based out of Kerala.  <br></br>
                            I love combining the world of logic and creative design to make eye-catching,user-friendly and accessible Website and Applications.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-top'>
                                The technology I've worked on : <span className="text-success ls-2">React js, Node js, MySQL
                                <br></br>
                                Material-UI, Html, Css, Js, Bootstrap,Semantic-UI </span>
                            </p>
                            <p className='slide-in-top'>
                                Currently Learning <span className="text-success ls-2"> React Native </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/About.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About