import React, {Component} from "react";
import { AddNewAfterSale } from '../../store/actions/AfterSalesAction';
import { connect } from 'react-redux';

class AddAfterSales extends Component {
    constructor(props){
        super(props);
        this.state = {
            Title: '',
            Content : '',
            Type:''

        }
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    AddAfterSale = event =>{
        const { Title, Content ,Type} = this.state;
        const { dispatch } = this.props;
        if (Title && Content && Type) {
            dispatch(AddNewAfterSale(Title, Content , Type))
        }
    }
    render() {
        return (
            <React.Fragment>
                {/*{this.props.AfterSalesAddedcap ? 'added' : 'not added'}*/}
                <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                            <div className="row">
                                <div className="card ">
                                    <div className="card-header card-header-rose card-header-icon">
                                        <div className="card-icon">
                                            <i className="material-icons">mail_outline</i>
                                        </div>
                                        <h4 className="card-title">Add After Service</h4>
                                    </div>
                                    <div className="card-body ">
                                        <form method="#" action="#">
                                            <div className="form-group">
                                                <label htmlFor="exampleEmail" className="bmd-label-floating">Title</label>
                                                <input type="text" className="form-control"
                                                       value={this.state.Title}
                                                       onChange={this.handleChange('Title')}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="examplePass" className="bmd-label-floating">Content</label>
                                                <input type="text" className="form-control"
                                                       value={this.state.Content}
                                                       onChange={this.handleChange('Content')}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <label htmlFor="examplePass" className="bmd-label-floating">Type</label>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <select className="form-control"data-style="btn select-with-transition"   value={this.state.Type} onChange={this.handleChange('Type')}>
                                                            <option  disabled selected>Single Option</option>
                                                            <option  className="form-control"  value="Repair">Repair</option>
                                                            <option className="form-control"   value="Configuration">Configuration</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="card-footer ">
                                        <button type="button" className="btn btn-fill btn-rose" onClick={event => this.AddAfterSale()}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    const { AfterSalesAdded } = state.aftersalesreducer;
    return {
        AfterSalesAdded
    };
}
export default connect(
    mapStateToProps,
    null
)(AddAfterSales);