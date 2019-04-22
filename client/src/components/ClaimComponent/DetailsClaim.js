import React, {Component} from "react";
import {Link} from "react-router-dom";

import {getClaimById} from "../../store/actions/ClaimActions";
import connect from "react-redux/es/connect/connect";
class DetailsClaim extends Component {

    componentWillMount() {
        const {idClaim} = this.props.match.params
        const {dispatch } = this.props;
        dispatch(getClaimById(idClaim));
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
                            <h6 className="card-title text-gray">Type: Type claims</h6>
                            <h6 className="card-title text-gray">State: State claims</h6>
                            <h6 className="card-title text-gray">From: User claims</h6>
                            <p className="card-description">
                               Content: Don't be scared of the truth because we need to restart the human foundation in truth
                                And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                            </p>

                            <button type="button" rel="tooltip" className="btn btn-success btn-link">
                                <i className="material-icons">done</i> Treated
                            </button>
                            <button type="button" rel="tooltip" className="btn btn-info btn-link">
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
    return {
        Claim
    };
}
export default connect(
    mapStateToProps,
    null
)(DetailsClaim);
// export default DetailsClaim;