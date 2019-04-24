import React, {Component} from "react";
import {Link} from "react-router-dom";
import {treatClaim,getClaimById} from "../../store/actions/ClaimActions";

import connect from "react-redux/es/connect/connect";
class DetailsClaim extends Component {

    componentWillMount() {
        const {idClaim} = this.props.match.params
        const {dispatch } = this.props;
        dispatch(getClaimById(idClaim));
    }

    constructor(props) {
        super(props);
        this.state = {
            change:'',
            idClaim:''
        };
    }
    redirectToTarget = () => {
        this.props.history.push(`/admin/claims/table`)
    }


    treat = event => {
        const {change,idClaim} = this.state;
        const {dispatch} = this.props;
        dispatch(treatClaim(change,idClaim));
    }


    render() {

        return (
            <React.Fragment>
                <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                    <div className="card card-profile">
                        <div className="card-avatar">
                            <a href="">
                                <img className="img" src={require('../../assets/img/claims.png')}/>
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-category "> Title  :{this.props.Claim.Title}</h4>
                            <h6 className="card-title text-gray">Type: {this.props.Claim.Type}</h6>
                            <h6 className="card-title text-gray">State: {this.props.Claim.State}</h6>
                            <h6 className="card-title text-gray">Date: {this.props.Claim.Date}</h6>
                            <p className="card-description">
                                Content: {this.props.Claim.Content}
                            </p>

                            <button type="button" rel="tooltip" className="btn btn-success btn-link"
                                    disabled={this.props.Claim.State ==='Treated'} style={{cursor: this.props.Claim.State === 'Treated' ?'not-allowed':''}}
                                    onClick={(event) => {
                                        this.state.change='treated'
                                        ;this.state.idClaim=this.props.Claim._id;
                                        this.treat();
                                        this.redirectToTarget();
                                    }}>
                                <i className="material-icons">done</i> Treated
                            </button>
                            <button type="button" rel="tooltip" className="btn btn-info btn-link"
                                    disabled={this.props.Claim.State ==='In Progress'} style={{cursor: this.props.Claim.State === 'In Progress' ?'not-allowed':''}}
                                    onClick={(event) => {
                                        this.state.change='inprogress'
                                        ;this.state.idClaim=this.props.Claim._id;
                                        this.treat();
                                        this.redirectToTarget();
                                    }}>

                                <i className="material-icons">build</i> In progress
                            </button>
                        </div>

                    </div>
                </div>
            </React.Fragment>

        );
    }
}
const mapStateToProps = (state) =>{
    const { Claim } = state.claimreducer;
    const { ClaimTreated } = state.claimreducer;

    return {
        Claim,
        ClaimTreated
    };
}
export default connect(
    mapStateToProps,
    null
)(DetailsClaim);
// export default DetailsClaim;