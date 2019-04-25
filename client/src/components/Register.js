import React, {Component} from "react";
import { register} from '../store/actions/LoginActions';
import connect from "react-redux/es/connect/connect";
import {history} from "../helpers";

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password:'',
            passwordConfirm:'',
            FirstName: '',
            LastName  : '',
            Email :'',
            Phone :'',
            City : '',
            Country : '',
            Postal_code : ''

        }
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    register = event =>{
        const username = this.state.username;
        const password = this.state.password;
        const firstname = this.state.FirstName;
        const Email = this.state.Email;
        const lastname = this.state.LastName;
        const Phone = this.state.Phone;
        const City = this.state.City
        const Country = this.state.Country
        const Postal_code = this.state.Postal_code
        const { dispatch } = this.props;
        if (username && password ) {
            dispatch(register(username,password,firstname,lastname,Email,Phone,City,Country,Postal_code))

        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.registered ? <div className="alert alert-success">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <i className="material-icons">close</i>
                        </button>
                        <span>
                      <b> Success - </b> Register successfull</span>
                    </div> :
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
                                                           placeholder="First Name..."
                                                           onChange={this.handleChange('FirstName')}
                                                           value={this.state.FirstName}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group has-default">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">person</i>
                          </span>
                                                    </div>
                                                    <input type="text" className="form-control"
                                                           placeholder="Last Name..."
                                                           onChange={this.handleChange('LastName')}
                                                           value={this.state.LastName}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group has-default">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">mail</i>
                          </span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Email..."
                                                           onChange={this.handleChange('Email')}
                                                           value={this.state.Email}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group has-default">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">person</i>
                          </span>
                                                    </div>
                                                    <input type="text" className="form-control"
                                                           placeholder="Username..."
                                                           onChange={this.handleChange('username')}
                                                           value={this.state.username}
                                                    />
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
                                                           className="form-control"
                                                           onChange={this.handleChange('password')}
                                                           value={this.state.password}
                                                    />
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
                                                           onChange={this.handleChange('passwordConfirm')}
                                                           value={this.state.passwordConfirm}
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
                                                           onChange={this.handleChange('Country')}
                                                           value={this.state.Country}
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
                                                    <input type="text" placeholder="Phone..."
                                                           onChange={this.handleChange('Phone')}
                                                           value={this.state.Phone}
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
                                                    <input type="text" placeholder="City..." className="form-control"
                                                           onChange={this.handleChange('City')}
                                                           value={this.state.City}
                                                    />
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
                                                           onChange={this.handleChange('Postal_code')}
                                                           value={this.state.Postal_code}
                                                           className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a className="btn btn-primary btn-round mt-4" onClick={(event) => {
                                                    this.register()
                                                }}>Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    const { registered } = state.authentication;
    return {
        registered
    };
}
export default connect(
    mapStateToProps,
    null
)(Register);