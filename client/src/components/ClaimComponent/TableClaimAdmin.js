import React, {Component} from "react";
import {Link} from "react-router-dom";
import {getAllClaims,treatClaim} from "../../store/actions/ClaimActions";
import connect from "react-redux/es/connect/connect";


class TableClaimAdmin extends Component {
    componentWillMount() {
        const {dispatch } = this.props;
        dispatch(getAllClaims())
    }
    constructor(props) {
        super(props);
        this.state = {
            change:'',
            idClaim:''
        };
    }


    treat = event => {
        const {change,idClaim} = this.state;
        const {dispatch} = this.props;
        dispatch(treatClaim(change,idClaim));
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-rose card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">warning</i>
                            </div>
                            <h4 className="card-title">Claims Table</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>State</th>
                                        <th className="text-right">Degre</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.props.Claims.map(claim => (
                                        <React.Fragment>
                                            <tr>
                                                <td>{claim.Title}</td>
                                                <td>{claim.Type}</td>
                                                <td>{claim.State}</td>
                                                <td className="text-right">{claim.Degre}</td>
                                                <td className="td-actions text-right">
                                                    <button type="button" rel="tooltip" className="btn btn-success btn-link"
                                                            disabled={claim.State ==='Treated'} style={{cursor: claim.State === 'Treated' ?'not-allowed':''}}
                                                            onClick={(event) => {
                                                                this.state.change='treated'
                                                                ;this.state.idClaim=claim._id;
                                                                this.treat();
                                                                this.props.Claims.update(this.props.Claims._id)
                                                            }}>
                                                        <i className="material-icons">done</i>
                                                    </button>
                                                    <button type="button" rel="tooltip" className="btn btn-info btn-link"
                                                            disabled={claim.State ==='In Progress'} style={{cursor: claim.State === 'In Progress' ?'not-allowed':''}}
                                                            onClick={(event) => {
                                                                this.state.change='inprogress'
                                                                ;this.state.idClaim=claim._id;
                                                                this.treat();
                                                            }}>
                                                        <i className="material-icons">build</i>
                                                    </button>
                                                    <button type="button" rel="tooltip" className="btn btn-warning btn-link">
                                                        <Link to={'/admin/claims/details/'+claim._id} style={{color:'#FF9C09'}} >
                                                            <i className="material-icons">assignment_late</i>
                                                        </Link>
                                                    </button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) =>{
    const { Claims } = state.claimreducer;
    const { ClaimTreated } = state.claimreducer;
    return {
        Claims,
        ClaimTreated
    };
}
export default connect(
    mapStateToProps,
    null
)(TableClaimAdmin);
