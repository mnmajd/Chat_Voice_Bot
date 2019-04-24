import React, {Component} from "react";
import {connect} from 'react-redux';
import {sendClaim} from '../../store/actions/ClaimActions';


class SendClaim extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Content: '',
            Type: '',
            Degre: ''
        }
    }

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };
    submit = event => {
        const {Title, Content, Type, Degre} = this.state;
        const {dispatch} = this.props;
        dispatch(sendClaim(Title, Content, Type, Degre));
    }
    redirectToTarget = () => {
        this.props.history.push(`/home/aboutme`)
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4  ml-auto mr-auto mb-2" style={{marginTop: '50px'}}>
                    <div className="card ">
                        <div className="card-header card-header-rose card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">send</i>
                            </div>
                            <h4 className="card-title">Send Claim</h4>
                        </div>
                        <div className="card-body ">
                            <form className="form" method action>
                                <div className="form-group">
                                    <label htmlFor="exampleEmail" className="bmd-label-floating">Title</label>
                                    <input type="text" className="form-control"
                                           value={this.state.Title}
                                           onChange={this.handleChange('Title')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examplePass" className="bmd-label-floating">Content</label>
                                    <input type="textarea" className="form-control"
                                           value={this.state.Content}
                                           onChange={this.handleChange('Content')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examplePass" className="bmd-label-floating">Type</label>
                                    <input type="text" className="form-control"
                                           value={this.state.Type}
                                           onChange={this.handleChange('Type')}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examplePass" className="bmd-label-floating">Degre</label>
                                    <input type="text" className="form-control"
                                           value={this.state.Degre}
                                           onChange={this.handleChange('Degre')}
                                    />
                                </div>
                                <div className="card-footer ">
                                    {/*<button type="submit" className="btn btn-fill btn-rose" onClick={(event)=>{this.submit()}}>Submit</button>*/}
                                    <a className="btn btn-rose btn-link btn-lg"
                                       onClick={(event) => { this.submit();this.redirectToTarget() }}
                                    >Submit</a>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

// export default SendClaim;
const mapStateToProps = (state) => {
    const {ClaimAdded} = state.claimreducer;
    return {
        ClaimAdded
    };

}
export default connect(
    mapStateToProps,
    null
)(SendClaim);