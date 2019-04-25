import React, {Component} from "react";
import { connect } from 'react-redux';
import { login } from '../store/actions/LoginActions';
import {history} from "../helpers";
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted : false

        }
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    componentDidMount() {
        console.log(this.props);
        if(localStorage.getItem('token')){
            history.push('/home')

        }
    }
    login = event =>{
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(login(username, password))
        }
    }
    render() {
        debugger
        return (


            <React.Fragment>
                {(this.props.loggedIn && localStorage.hasOwnProperty('token') )? '' :
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
                  <input type="text" className="form-control" placeholder="Username"

                         onChange={this.handleChange('username')}
                  />
                </div>
              </span>

                                    <span className="bmd-form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="material-icons">lock_outline</i>
                    </span>
                  </div>
                  <input type="password" className="form-control" placeholder="Password..."
                         value={this.state.password}
                         onChange={this.handleChange('password')}
                  />
                </div>
              </span>
                                </div>
                                <div className="card-footer justify-content-center">
                                    <a className="btn btn-rose btn-link btn-lg" onClick={(event) => {
                                        this.login()
                                    }}>Lets Go</a>
                                </div>
                            </div>
                        </form>
                    </div>
                }
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) =>{
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}
export default connect(
    mapStateToProps,
    null
)(Login);