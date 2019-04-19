import React, {Component} from "react";

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                    <form className="form" method action>
                        <div className="card card-login card-hidden">
                            <div className="card-header card-header-rose text-center">
                                <h4 className="card-title">Log in</h4>
                                <div className="social-line">
                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                                        <i className="fa fa-facebook-square"/>
                                    </a>
                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                                        <i className="fa fa-twitter"/>
                                    </a>
                                    <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                                        <i className="fa fa-google-plus"/>
                                    </a>
                                </div>
                            </div>
                            <div className="card-body ">
                                <p className="card-description text-center">Or Be Classical</p>
                                <span className="bmd-form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="material-icons">face</i>
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="First Name..."/>
                </div>
              </span>
                                <span className="bmd-form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="material-icons">email</i>
                    </span>
                  </div>
                  <input type="email" className="form-control" placeholder="Email..."/>
                </div>
              </span>
                                <span className="bmd-form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="material-icons">lock_outline</i>
                    </span>
                  </div>
                  <input type="password" className="form-control" placeholder="Password..."/>
                </div>
              </span>
                            </div>
                            <div className="card-footer justify-content-center">
                                <a href="#pablo" className="btn btn-rose btn-link btn-lg">Lets Go</a>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;