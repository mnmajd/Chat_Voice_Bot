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
                            <i className="material-icons">person_outline</i>
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
                            <i className="material-icons">person</i>
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

                                        <div className="form-group has-default">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">room</i>
                          </span>
                                                </div>
                                                <input type="text" placeholder="Country..."
                                                       className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group has-default">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">room</i>
                          </span>
                                                </div>
                                                <input type="text" placeholder="City..." className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group has-default">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">room</i>
                          </span>
                                                </div>
                                                <input type="text" placeholder="Postal Code..."
                                                       className="form-control"/>
                                            </div>
                                        </div>

                                        <div className="form-group has-default" style={{marginLeft:'150px'}}>
                                            <div className="fileinput fileinput-new text-center"
                                                 data-provides="fileinput">
                                                <div className="fileinput-new thumbnail img-circle">
                                                    <img src={require('../assets/img/placeholder.jpg')} alt="..."/>
                                                </div>
                                                <div
                                                    className="fileinput-preview fileinput-exists thumbnail img-circle"/>
                                                <div>
                                        <span className="btn btn-round btn-rose btn-file">
                                          <span className="fileinput-new">Add Photo</span>
                                          <span className="fileinput-exists">Change</span>
                                          <input type="file" name="..."/>
                                        </span>
                                                </div>
                                                <br/>
                                                <a href="#pablo" className="btn btn-danger btn-round fileinput-exists"
                                                   data-dismiss="fileinput"><i className="fa fa-times"/> Remove</a>
                                            </div>
                                        </div>

                                        {/*<div className="form-group has-default">*/}
                                        {/*<div className="btn btn-primary btn-round mt-4">Get Started</div>*/}
                                        {/*</div>*/}
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