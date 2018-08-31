import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand">Brand</a>
                        </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a>Link <span className="sr-only">(current)</span></a></li>
                                <li><a>Link</a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
                                    <ul className="dropdown-menu">
                                        <li><a>Action</a></li>
                                        <li><a>Another action</a></li>
                                        <li><a>Something else here</a></li>
                                        <li role="separator" className="divider" />
                                        <li><a>Separated link</a></li>
                                        <li role="separator" className="divider" />
                                        <li><a>One more separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a>Link</a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></a>
                                    <ul className="dropdown-menu">
                                        <li><a>Action</a></li>
                                        <li><a>Another action</a></li>
                                        <li><a>Something else here</a></li>
                                        <li role="separator" className="divider" />
                                        <li><a>Separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>{/* /.navbar-collapse */}
                    </div>{/* /.container-fluid */}
                </nav>
            </div>
        );
    }
}

export default Header;
