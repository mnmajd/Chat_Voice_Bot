import React, {Component} from "react";
import {addService} from "../../store/actions/ServiceAction";
import connect from "react-redux/es/connect/connect";


class AddService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Description: '',
            Code: '',
            Type: '',
            // Offer:'',
        }
    }

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };
    submit = event => {
        const {Title,Description, Code,Type} = this.state;
        const {dispatch} = this.props;
        dispatch(addService(Title,Description, Code,Type));
    }
    render() {
        return (
            <React.Fragment>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header card-header-rose card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">send</i>
                                </div>
                                <h4 className="card-title">Add Service</h4>
                            </div>
                            <div className="card-body ">
                                <form className="form" method action>
                                    <div className="form-group">
                                        <label htmlFor="exampleEmail" className="bmd-label-floating">Title</label>
                                        <input type="text" className="form-control"
                                               value={this.state.Title}
                                               onChange={this.handleChange('Title')}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="examplePass" className="bmd-label-floating">Description</label>
                                        <input type="textarea" className="form-control"
                                               value={this.state.Description}
                                               onChange={this.handleChange('Description')}/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="examplePass" className="bmd-label-floating">Code</label>
                                        <input type="text" className="form-control"
                                               value={this.state.Code}
                                               onChange={this.handleChange('Code')}/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="examplePass" className="bmd-label-floating">Type</label>
                                        <input type="text" className="form-control"
                                               value={this.state.Type}
                                               onChange={this.handleChange('Type')}/>

                                    </div>
                                    {/*<div className="form-group">*/}
                                        {/*<label htmlFor="examplePass" className="bmd-label-floating">Offer</label>*/}
                                        {/*<input type="text" className="form-control"*/}
                                               {/*value={this.state.Offer}*/}
                                               {/*onChange={this.handleChange('Offer')}/>*/}
                                    {/*</div>*/}
                                    <div className="card-footer ">
                                        <a className="btn btn-rose btn-link btn-lg"
                                           onClick={(event) => {
                                               this.submit()
                                           }}>Submit</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const {ServiceAdded} = state.servicesreducer;
    return {
        ServiceAdded
    };

}
export default connect(
    mapStateToProps,
    null
)(AddService);