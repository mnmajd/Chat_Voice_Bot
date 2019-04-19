import React, {Component} from "react";

class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-10 ml-auto mr-auto">
                    <div className="card card-signup">
                        <h2 className="card-title text-center">Register</h2>
                        <div className="card-body">
                            <form className="form" method action>
                            <div className="row">
                                <div className="col-md-5 ml-auto">

                                    <div className="form-group has-default">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">face</i>
                          </span>
                                            </div>
                                            <input type="text" className="form-control"
                                                   placeholder="First Name..."/>
                                        </div>
                                    </div>
                                    <div className="form-group has-default">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">face</i>
                          </span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Last Name..."/>
                                        </div>
                                    </div>
                                    <div className="form-group has-default">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">mail</i>
                          </span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Email..."/>
                                        </div>
                                    </div>
                                    <div className="form-group has-default">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">lock_outline</i>
                          </span>
                                            </div>
                                            <input type="password" placeholder="Password..."
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group has-default">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">lock_outline</i>
                          </span>
                                            </div>
                                            <input type="password" placeholder="Confirm Password..."
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5 mr-auto">
                                    {/*<label className="bmd-label-floating" style={{marginLeft:'30px',color:"#3c4858"}}>Adress : </label>*/}
                                    <h6 className="card-title text-center">Adress:</h6>

                                        <div className="form-group has-default">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">lock_outline</i>
                          </span>
                                                </div>
                                                <input type="password" placeholder="Country..."
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group has-default">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">lock_outline</i>
                          </span>
                                                </div>
                                                <input type="password" placeholder="City..." className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group has-default">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">lock_outline</i>
                          </span>
                                                </div>
                                                <input type="password" placeholder="Postal Code..."
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" defaultValue
                                                       defaultChecked/>
                                                <span className="form-check-sign">
                          <span className="check"/>
                        </span>
                                                I agree to the
                                                <a href="#something">terms and conditions</a>.
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <a href="#pablo" className="btn btn-primary btn-round mt-4">Get Started</a>
                                        </div>

                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;