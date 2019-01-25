import React from 'react'

const header = () => (
    <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">

                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar middle"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <a className="navbar-brand" href="/">
                        <span>TSF</span> Team Solar Florida
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="app-navbar-collapse">
                    <ul className="nav navbar-nav">
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li className="wow fadeIn" data-wow-delay="0.8s"><a>About</a></li>
                        <li className="wow fadeIn" data-wow-delay="0.6s"><a>Panels</a></li>
                        <li className="wow fadeIn" data-wow-delay="0.4s"><a>Team</a></li>
                        <li className="wow fadeIn" data-wow-delay="0.2s"><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
)

export default header