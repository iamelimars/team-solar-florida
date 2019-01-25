import React from 'react'

const body = () => (
    <div>
        <div id="hero">
            <div id="cover">
                <h1 className="text-center wow fadeInDown" data-wow-delay="1.2s">BE IN CONTROL OF YOUR POWER</h1>
                <h3 className="text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.5s">AFFORDABLE SOLAR PANELS</h3>
                <a href="#"><i className="fa fa-angle-double-down fa-2x" aria-hidden="true"></i></a>
            </div>
        </div>
        <div id="info" className="section">
            <div className="container">
                <div className="col-sm-4 info-section wow fadeInLeft" data-wow-duration="2s" data-wow-offset="50">
                    <h3>Solar is now the cheapest an most abundant energy source in the world</h3>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-4 col-sm-offset-4 info-section wow fadeInUp" data-wow-duration="2s" data-wow-offset="50">
                    <h3>Over a million solar systems have been installed in the U.S. alone</h3>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-4 col-sm-offset-8 info-section wow fadeInRight" data-wow-duration="2s" data-wow-offset="50">
                    <h3>Homeowners don't have to install their own solar panels to go solar</h3>
                </div>
            </div>
        </div>

        <div className="clearfix"></div>


        <div className="clearfix"></div>

        <div id="panel" className="section">
            <div className="container">
                <img className="col-xs-12 wow fadeIn" data-wow-duration="3s" data-wow-offset="100" src="https://s3.us-east-2.amazonaws.com/iamelimars/solar-panel.png" alt="Solar Panel" />
            </div>
        </div>

        <div className="clearfix"></div>

        <div id="contact" className="alt-section">
            <div className="container">
                <h3>Contact</h3>
                <form id="contact-form" className="col-xs-10 col-xs-offset-1" action="{!! route('post.contact') !!}" method="post">
                    <label className="col-xs-12 wow fadeIn" data-wow-duration="3s" data-wow-delay="1s" htmlFor="name">Name</label>
                    <input className="col-xs-12 wow fadeIn" data-wow-duration="3s" data-wow-delay="1.2s" type="text" id="name" name="name"  />

                    <label className="col-xs-12 wow fadeIn" data-wow-duration="3s" data-wow-delay="1.3s" htmlFor="email">Email</label>
                    <input className="col-xs-12 wow fadeIn" data-wow-duration="3s" data-wow-delay="1.4s" type="email" name="email" id="email"  />

                    <label className="col-xs-12 wow fadeIn" data-wow-duration="3s" data-wow-delay="1.5s" htmlFor="body">Body</label>
                    <textarea className="col-xs-12 wow fadeIn" data-wow-duration="3s" data-wow-delay="1.6s" name="body" id="body" rows="8" cols="80"></textarea>

                    <input type="submit" data-wow-duration="3s" data-wow-delay="1.7s" value="Submit" id="submit" className="col-xs-4 col-xs-offset-4 wow fadeIn" />
                </form>
            </div>
        </div>

        <div className="clearfix"></div>

        <div id="team" className="section">
            <div className="container">
                <h3>Team</h3>
                <div className="col-xs-12 col-sm-4 team-container">
                    <div className="col-xs-12 wow fadeInLeft team-card" data-wow-duration="3s" data-wow-delay="1s">
                        <img className="col-xs-6 col-xs-offset-3 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" src="https://s3.us-east-2.amazonaws.com/iamelimars/Walter%403x.png" alt="" />
                        <h4 className="col-xs-12 text-center">Walter Briceno</h4>
                        <h5 className=" col-xs-12 text-center">CEO</h5>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 team-container">
                    <div className="col-xs-12 wow fadeInUp team-card" data-wow-duration="3s" data-wow-delay="1.2s">
                        <img className="col-xs-6 col-xs-offset-3 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" src="https://s3.us-east-2.amazonaws.com/iamelimars/Sonia%403x.png" alt="" />
                        <h4 className="col-xs-12 text-center">Sonia Cera</h4>
                        <h5 className=" col-xs-12 text-center">COO</h5>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 team-container">
                    <div className="col-xs-12 wow fadeInRight team-card" data-wow-duration="3s" data-wow-delay="1.4s">
                        <img className="col-xs-6 col-xs-offset-3 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" src="https://s3.us-east-2.amazonaws.com/iamelimars/diana%403x.png" alt="" />
                        <h4 className="col-xs-12 text-center">Diana Briceno</h4>
                        <h5 className=" col-xs-12 text-center">CMO</h5>
                    </div>
                </div>
            </div>
        </div>

        <div id="footer" className="top-footer">
            <div className="footer-section col-sm-4">
                <h4 className="col-xs-12 text-center">Contact</h4>
            </div>
            <div className="footer-section col-sm-4">
                <h4 className="col-xs-12 text-center">Links</h4>
            </div>
            <div className="footer-section col-sm-4">
                <h4 className="col-xs-12 text-center">Location</h4>
            </div>
        </div>
        <div id="bottom-footer" className="footer">

        </div>
    </div>
)

export default body